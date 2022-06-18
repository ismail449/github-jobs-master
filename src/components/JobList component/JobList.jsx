import React from 'react';
import { Link } from 'react-router-dom';
import JobItem from '../JobItem Component/JobItem';

const JobList = ({ jobList }) => {
  console.log(jobList);
  return (
    <div className="job-list">
      {jobList?.map((job) => (
        <Link style={{ textDecoration: 'none' }} to={`job-detail/${job.id}`}>
          <JobItem key={job.id} job={job} />
        </Link>
      ))}
    </div>
  );
};

export default JobList;
