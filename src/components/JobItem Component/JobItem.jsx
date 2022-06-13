import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PublicIcon from '@mui/icons-material/Public';
import './JobItem.css';

const JobItem = ({ job }) => {
  const date = new Date(job.date_posted);
  const today = new Date();
  const diffTime = Math.abs(today - date);
  const numberOfDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
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
        <div className="job-item-info">
          <div className="job-item-employment">
            <p>{job.employment_type ? job.employment_type : 'not specified'}</p>
          </div>

          <div className="job-item-location-date">
            <div className="job-item-date">
              <PublicIcon />
              <p>{job.location}</p>
            </div>

            <div className="job-item-date">
              <AccessTimeIcon />
              <p>{numberOfDays} days ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobItem;
