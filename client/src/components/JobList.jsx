// src/components/JobList.jsx
import React from 'react';
import { deleteJob, updateStatus } from '../api';
import './JobList.css'; // we'll add CSS below

export default function JobList({ jobs, setJobs }) {
  const handleDelete = async (id) => {
    await deleteJob(id);
    setJobs(jobs.filter(job => job._id !== id));
  };

  const handleStatusChange = async (id, status) => {
    const updated = await updateStatus(id, status);
    setJobs(jobs.map(job => job._id === id ? updated.data : job));
  };

  return (
    <div className="job-list">
      {jobs.map(job => (
        <div key={job._id} className={`job-card ${job.status.toLowerCase()}`}>
          <div className="job-header">
            <h3>{job.role}</h3>
            <span className="status-tag">{job.status}</span>
          </div>
          <p><strong>Company:</strong> {job.company}</p>
          <p><strong>Applied On:</strong> {new Date(job.appliedDate).toLocaleDateString()}</p>
          {job.link && (
            <p>
              <a href={job.link} target="_blank" rel="noreferrer">🔗 Job Link</a>
            </p>
          )}
          <div className="job-actions">
            <select value={job.status} onChange={(e) => handleStatusChange(job._id, e.target.value)}>
              <option>Applied</option>
              <option>Interview</option>
              <option>Offer</option>
              <option>Rejected</option>
            </select>
            <button onClick={() => handleDelete(job._id)}>❌</button>
          </div>
        </div>
      ))}
    </div>
  );
}
