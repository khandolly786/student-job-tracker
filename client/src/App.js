// client/src/App.js
import React, { useEffect, useState } from 'react';
import { fetchJobs } from './api';
import JobForm from './components/JobForm';
import JobList from './components/JobList';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs()
      .then(res => setJobs(res.data))
      .catch(err => console.error("❌ Error fetching jobs:", err));
  }, []);

  const addJobToList = (job) => setJobs([job, ...jobs]);

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "2rem" }}>
      <h1>📋 Student Job Tracker</h1>
      <JobForm onAdd={addJobToList} />
      <JobList jobs={jobs} setJobs={setJobs} />
    </div>
  );
}

export default App;
