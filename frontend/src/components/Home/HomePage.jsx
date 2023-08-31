import React, { useState, useEffect } from 'react';
import Loading from '../Loading/Loading';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Cards/Card';
import { fetchDogs, filterByTemperament } from '../../Redux/actions';
import SearchBar from '../SearchBar/SerchBar';
import Pagination from '../Pagination/Pagination';
import NavBar from '../NavBar/NavBar';
import SortingOptions from '../Filter/SortingOptions'; 
import style from './HomePage.module.css'; 
import TemperamentFilter from '../Filter/TemperamentFilter';


const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const allDogs = useSelector(state => state.allDogs);
  const dogs = useSelector(state => state.dogs);
  const dispatch = useDispatch();
  const dogsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [sortField, setSortField] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedTemperament, setSelectedTemperament] = useState('');

  useEffect(() => {
    dispatch(fetchDogs());
    setLoading(false);
  }, [dispatch]);

  const handleSearch = (term) => {
    const results = allDogs.filter(dog => dog.nombre.toLowerCase().includes(term.toLowerCase()));
    setSearchResults(results);
    setCurrentPage(1);
  };

  const handleFilterByTemperament = (selectedValue) => {
    setSelectedTemperament(selectedValue);
    setCurrentPage(1);
  };

  let dogsToShow = [];
  let dogsToPaginate = dogs;

  if (searchResults.length > 0) {
    dogsToPaginate = searchResults;
  }

  if (selectedTemperament) {
    dogsToPaginate = dogsToPaginate.filter(dog => dog.temperamento.includes(selectedTemperament));
  }

  const sortedDogs = dogsToPaginate.slice().sort((a, b) => {
    if (sortField === 'name') {
      return sortOrder === 'asc' ? a.nombre.localeCompare(b.nombre) : b.nombre.localeCompare(a.nombre);
    } else if (sortField === 'weight') {
      const aWeight = parseFloat(a.peso?.metric) || 0;
      const bWeight = parseFloat(b.peso?.metric) || 0;
      return sortOrder === 'asc' ? aWeight - bWeight : bWeight - aWeight;
    }
  });

  dogsToShow = sortedDogs.slice((currentPage - 1) * dogsPerPage, currentPage * dogsPerPage);

  const totalPages = Math.ceil(dogsToPaginate.length / dogsPerPage);

  const handleSortChange = (field, order) => {
    setSortField(field);
    setSortOrder(order);
    setCurrentPage(1);
  };

  return (
    <div className={style.homeContainer}>
      <NavBar />
      <SearchBar onSearch={handleSearch} />
      <SortingOptions onSortChange={handleSortChange} />
      <TemperamentFilter onChange={handleFilterByTemperament} />

      {loading ? (
        <Loading />
      ) : (
        <div className={style.cardContainer}>
          {dogsToShow.map(dog => (
            <Card
              key={dog.id}
              id={dog.id}
              name={dog.nombre}
              image={dog.imagen}
              temperaments={dog.temperamento ? dog.temperamento.join(', ') : ''}
              weight={dog.peso ? `${dog.peso.metric} kg` : ''}
            />
          ))}
        </div>
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        dogsPerPage={dogsPerPage}
      />
    </div>
  );
};

export default HomePage;