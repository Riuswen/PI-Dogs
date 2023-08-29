import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Cards/Card';
import { fetchDogs } from '../../Redux/actions';
import SearchBar from '../SearchBar/SerchBar';
import Pagination from '../Pagination/Pagination';
import NavBar from '../NavBar/NavBar';
import style from './HomePage.module.css'; 

  const HomePage = () => {
  const allDogs = useSelector(state => state.allDogs);
  const dispatch = useDispatch();
  const dogsPerPage = 8; 
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchDogs());
  }, [dispatch]);

  const handleSearch = (term) => {
    const results = allDogs.filter(dog => dog.nombre.toLowerCase().includes(term.toLowerCase()));
    setSearchResults(results);
    setSearchTerm(term);
    setCurrentPage(1); 
  };

  const dogs = searchResults.length > 0 ? searchResults : allDogs;
  const totalPages = Math.ceil(dogs.length / dogsPerPage);
  const startIndex = (currentPage - 1) * dogsPerPage;
  const endIndex = startIndex + dogsPerPage;
  const dogsToShow = dogs.slice(startIndex, endIndex);

  return (
    <div className={style.homeContainer}>
      <NavBar />
      {/* <h1 className={style.pageTitle}>DOGPEDIA</h1> */}
      <SearchBar onSearch={handleSearch} />
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