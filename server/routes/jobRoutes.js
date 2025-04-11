const express = require('express');
const router = express.Router();
const Job = require('../models/jobModel');

// Add new job
router.post('/', async (req, res) => {
    try {
      const newJob = new Job(req.body);
      await newJob.save();
      res.status(201).json(newJob);
    } catch (err) {
      console.error("❌ Error in POST /api/jobs:", err.message);
      res.status(500).json({ error: 'Failed to add job' });
    }
});

// Get all jobs
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find().sort({ appliedDate: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update job status
router.put("/:id", async (req, res) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    res.json(updatedJob);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete job
router.delete("/:id", async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.json({ message: "Job deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
