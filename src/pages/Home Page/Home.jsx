import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import JobList from '../../components/JobList component/JobList';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { url, requestOptions } from '../../apiKey';
import './Home.css';

const Home = () => {
  const [searchInput, setSearchInput] = useState(
    'Title, companies, expertise or benefits',
  );
  const [jobList, setJobList] = useState([]);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 5;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(jobList.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(jobList.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, jobList]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % jobList.length;
    setItemOffset(newOffset);
  };
  const fetchSearch = async () => {
    try {
      const response = await fetch(
        `${url}location=london&search=${searchInput}&sort_by=relevance`,
        requestOptions,
      );
      const data = await response.json();
      setJobList(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchSearch();
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
          />
          <button className="home-search-button" type="submit">
            Search
          </button>
        </form>
      </div>
      {jobList ? (
        <>
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
        </>
      ) : null}
    </div>
  );
};

export default Home;
