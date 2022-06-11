import React from 'react';
import './JobItem.css';

const JobItem = ({ job }) => {
  return (
    <div className="job-item">
      <div className="job-item-img">
        {job.logo ? (
          <img src={job.logo} />
        ) : (
          <div className="not-found">not found</div>
        )}
      </div>
      <div className="job-item-detail">
        <p className="job-item-organization-name">{job.company_name}</p>
        <p className="job-item-position-title">{job.role}</p>
        <div>{job.employment_type ? job.employment_type : 'not specified'}</div>
        <div>{job.location}</div>
        <div>{job.date_posted}</div>
      </div>
    </div>
  );
};

export default JobItem;
