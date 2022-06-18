import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
    <div>
      <div dangerouslySetInnerHTML={{ __html: job.text }}></div>
    </div>
  );
};

export default JobDetail;
