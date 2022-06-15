import React, { useState } from 'react';
import PublicIcon from '@mui/icons-material/Public';
import './Filter.css';

const Filter = () => {
  const [isChecked, setIsChecked] = useState(false);
  const cities = ['London', 'Cairo', 'New York', 'Berlin'];

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleSearch = (event) => {
    if (event.keyCode === 13) {
      console.log(event.target.value);
    }
  };
  const handleRadio = (event) => {
    console.log(event.target.value);
  };
  const handleCheckbox = (event) => {
    console.log(event.target.checked);
    setIsChecked(event.target.checked);
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
            defaultValue="City, state, zip code or country"
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
