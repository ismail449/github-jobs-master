import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';
import Filter from '../../components/Filter Component/Filter';
import JobList from '../../components/JobList component/JobList';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { fetchJobs } from '../../redux/features/jobs/jobsSlice';

import './Home.css';

const Home = () => {
  const [searchInput, setSearchInput] = useState('');
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const location = useSelector((state) => state.filter.location);
  const fulltime = useSelector((state) => state.filter.fulltime);
  const jobs = useSelector((state) => state.jobs.jobs);
  const dispatch = useDispatch();

  const itemsPerPage = 5;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    if (jobs.length > 0) {
      setCurrentItems(jobs.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(jobs.length / itemsPerPage));
    }
  }, [itemOffset, itemsPerPage, jobs]);
  useEffect(() => {
    if (searchInput !== '') {
      console.log('fulltime', fulltime);
      dispatch(fetchJobs({ fulltime, location, searchInput }));
    }
  }, [location, fulltime]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % jobs.length;
    setItemOffset(newOffset);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchJobs({ fulltime, location, searchInput }));
  };
  return (
    <div className="home">
      <div className="home-search-background">
        <form onSubmit={handleSubmit} className="home-search-form">
          <WorkOutlineIcon className="home-search-icon" />
          <input
            className="home-search-input"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            type="search"
            placeholder="Title, companies, expertise or benefits"
          />
          <button className="home-search-button" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="home-body">
        <Filter />
        {jobs ? (
          <div className="home-job-list">
            <JobList jobList={currentItems} />
            <ReactPaginate
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={pageCount}
              previousLabel="<"
              pageClassName="page-item"
              previousClassName="page-item"
              nextClassName="page-item"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="home-paginate"
              activeClassName="page-item-active"
              renderOnZeroPageCount={null}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
