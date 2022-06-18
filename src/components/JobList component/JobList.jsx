import React from 'react';
import { Link } from 'react-router-dom';
import JobItem from '../JobItem Component/JobItem';

const JobList = ({ jobList }) => {
  return (
    <div className="job-list">
      {jobList?.map((job) => (
        <Link
          key={job.id}
          style={{ textDecoration: 'none' }}
          to={`job-detail/${job.id}`}
        >
          <JobItem job={job} />
        </Link>
      ))}
    </div>
  );
};

export default JobList;
