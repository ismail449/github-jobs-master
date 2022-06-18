import React from 'react';
import JobSearch from '../../components/JobSearch Component/JobSearch';
import Filter from '../../components/Filter Component/Filter';
import Paginate from '../../components/Paginate Component/Paginate';

const Home = () => {
  return (
    <div className="home">
      <JobSearch />
      <div className="home-body">
        <Filter />
        <Paginate />
      </div>
    </div>
  );
};

export default Home;
