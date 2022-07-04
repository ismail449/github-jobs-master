import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SideSection from '../../components/SideSection Component/SideSection';
import JobInfo from '../../components/JobInfo Component/JobInfo';
import './JobDetail.css';

const JobDetail = () => {
  const jobs = useSelector((state) => state.jobs.jobs);
  const [job, setJob] = useState({});
  const { jobId } = useParams();

  useEffect(() => {
    getJob();
  }, [job]);

  const getJob = () => {
    if (jobs.length > 0) {
      const FoundJob = jobs.find((job) => job.id === jobId);
      setJob(FoundJob);
    }
  };

  return (
    <div className="job-detail">
      <SideSection url={job.url} />
      <div className="job-detail-body">
        <JobInfo job={job} />
        <div
          className="job-detail-body-text"
          dangerouslySetInnerHTML={{ __html: job.text }}
        ></div>
      </div>
    </div>
  );
};

export default JobDetail;
