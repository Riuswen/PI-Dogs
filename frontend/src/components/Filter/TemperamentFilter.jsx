import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterByTemperament } from '../../Redux/actions';

const TemperamentFilter = () => {
  const [selectedTemperament, setSelectedTemperament] = useState('');
  const dispatch = useDispatch();

  const handleTemperamentChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedTemperament(selectedValue);
    dispatch(filterByTemperament(selectedValue));
  };

  return (
    <div>
      <label>Filter by Temperament:</label>
      <select value={selectedTemperament} onChange={handleTemperamentChange}>
        <option value="">All</option>
      </select>
    </div>
  );
};

export default TemperamentFilter;
