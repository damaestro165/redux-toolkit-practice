import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeSearchTerm } from '../store';

function CarSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.cars.searchTerm;
  });
  const handleSearchTermChange = (e) => {
    dispatch(ChangeSearchTerm(e.target.value));
  };

  return (
    <div className='list-header'>
      <div className='title is-3'>My Cars</div>
      <div className='search field is-horizontal'>
        <label className='label'>Search</label>
        <input
          className='input'
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </div>
    </div>
  );
}

export default CarSearch;
