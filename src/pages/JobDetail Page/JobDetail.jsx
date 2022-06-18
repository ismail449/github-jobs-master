import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SideSection from '../../components/SideSection Component/SideSection';
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
      const FoundJob = jobs.find((job) => job.id === +jobId);

      console.log(FoundJob);
      setJob(FoundJob);
    }
  };

  return (
    <div className="job-detail">
      <SideSection url={job.url} />
      <div className="job-detail-body">
        <div>Job Detail</div>
        <div dangerouslySetInnerHTML={{ __html: job.text }}></div>
      </div>
    </div>
  );
};

export default JobDetail;
