// src/components/JobForm.jsx
import React, { useState } from "react";
import { addJob } from '../api';
import './JobForm.css'; 

export default function JobForm({ onAdd }) {
  const [job, setJob] = useState({
    company: "",
    role: "",
    status: "Applied",
    appliedDate: "",
    link: "",
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addJob(job);
      onAdd(res.data); // update job list
      alert("✅ Job added successfully!");
      // reset form
      setJob({
        company: "",
        role: "",
        status: "Applied",
        appliedDate: "",
        link: "",
      });
    } catch (err) {
      alert("❌ Failed to add job!");
      console.error(err);
    }
  };

  return (
    <div className="job-form">
      <h2>Add New Job</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="company"
          placeholder="Company"
          value={job.company}
          onChange={handleChange}
          required
        />
        <input
          name="role"
          placeholder="Role"
          value={job.role}
          onChange={handleChange}
          required
        />
        <select name="status" value={job.status} onChange={handleChange}>
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>
        <input
          type="date"
          name="appliedDate"
          value={job.appliedDate}
          onChange={handleChange}
          required
        />
        <input
          name="link"
          placeholder="Job Link"
          value={job.link}
          onChange={handleChange}
        />
        <button type="submit">Add Job</button>
      </form>
    </div>
  );
}
