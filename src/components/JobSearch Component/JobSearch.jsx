import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../../redux/features/jobs/jobsSlice';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import './JobSearch.css';

const JobSearch = () => {
  const [searchInput, setSearchInput] = useState('');
  const location = useSelector((state) => state.filter.location);
  const fulltime = useSelector((state) => state.filter.fulltime);
  const dispatch = useDispatch();
  useEffect(() => {
    if (searchInput !== '') {
      dispatch(fetchJobs({ fulltime, location, searchInput }));
    }
  }, [location, fulltime]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchJobs({ fulltime, location, searchInput }));
  };
  return (
    <div className="job-search">
      <div className="home-search-background">
        <form onSubmit={handleSubmit} className="home-search-form">
          <WorkOutlineIcon className="home-search-icon" />
          <input
            className="home-search-input"
            type="search"
            placeholder="Title, companies, expertise or benefits"
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
          />
          <button className="home-search-button" type="submit">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobSearch;
