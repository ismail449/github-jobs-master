import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PublicIcon from '@mui/icons-material/Public';
import getNumberOfDays from '../getNumberOfDays';
import './JobInfo.css';

const JobInfo = ({ job }) => {
  return (
    <div className="job-info">
      <div className="job-info-header">
        <h2>{job.role}</h2>
        <p>{job.employmentType ? job.employmentType : 'not specified'}</p>
      </div>
      <div className="job-info-icon-text">
        <AccessTimeIcon className="job-info-icon" />
        <p>{getNumberOfDays(job.date_posted)} days ago</p>
      </div>
      <div className="job-info-card">
        <div className="job-info-img">
          {job.logo ? (
            <img src={job.logo} />
          ) : (
            <div className="not-found">not found</div>
          )}
        </div>
        <div>
          <p className="job-info-company-name">{job.company_name}</p>
          <div className="job-info-icon-text">
            <PublicIcon className="job-info-icon" />
            <p>{job.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobInfo;
