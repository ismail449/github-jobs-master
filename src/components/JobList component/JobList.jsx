import React from 'react';
import JobItem from '../JobItem Component/JobItem';
import './JobList.css';

const JobList = ({ jobList }) => {
  console.log(jobList);
  return (
    <div>
      {jobList?.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
