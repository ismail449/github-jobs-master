import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  filterByLocation,
  filterByEmploymentType,
} from '../../redux/features/filter/filterSlice';
import PublicIcon from '@mui/icons-material/Public';
import './Filter.css';

const Filter = () => {
  const [isChecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const cities = ['London', 'Cairo', 'New York', 'Berlin'];

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleSearch = (event) => {
    if (event.keyCode === 13 && event.target.value) {
      dispatch(filterByLocation(event.target.value));
    }
  };
  const handleRadio = (event) => {
    dispatch(filterByLocation(event.target.value));
  };
  const handleCheckbox = (event) => {
    setIsChecked(event.target.checked);
    dispatch(filterByEmploymentType(event.target.checked));
  };
  return (
    <div className="filter">
      <form onSubmit={handleSubmit} className="filter-form">
        <div className="checkbox-container">
          <input
            onChange={handleCheckbox}
            checked={isChecked}
            className="filter-checkbox"
            type="checkbox"
          />
          <label className="filter-checkbox-label">Full time</label>
        </div>
        <div className="form-title">Location</div>
        <div className="form-input-container">
          <PublicIcon className="form-input-icon" />
          <input
            placeholder="City, state, zip code or country"
            className="form-input"
            type="search"
            onKeyUp={(event) => handleSearch(event)}
          />
        </div>
        <div className="radio-buttons">
          {cities.map((city) => (
            <div className="radio-button-container" key={city}>
              <input
                onChange={handleRadio}
                value={city}
                name="radio-button"
                type="radio"
              />
              <label className="label">{city}</label>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Filter;
