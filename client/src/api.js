// client/src/api.js
import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/jobs";

export const fetchJobs = () => axios.get(BASE_URL);

export const addJob = (job) => axios.post(BASE_URL, job);

export const deleteJob = (id) => axios.delete(`${BASE_URL}/${id}`);

export const updateStatus = (id, status) =>
  axios.put(`${BASE_URL}/${id}`, { status });
