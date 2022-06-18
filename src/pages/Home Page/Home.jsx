import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ReactPaginate from 'react-paginate';
import Filter from '../../components/Filter Component/Filter';
import JobList from '../../components/JobList component/JobList';
import JobSearch from '../../components/JobSearch Component/JobSearch';

import './Home.css';

const Home = () => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const jobs = useSelector((state) => state.jobs.jobs);

  const itemsPerPage = 5;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    if (jobs.length > 0) {
      setCurrentItems(jobs.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(jobs.length / itemsPerPage));
    }
  }, [itemOffset, itemsPerPage, jobs]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % jobs.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="home">
      <JobSearch />
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
