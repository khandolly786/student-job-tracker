const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const jobRoutes = require('./routes/jobRoutes'); // <-- Ye line ke liye error aaya tha
const cors = require('cors');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// DB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.log("❌ DB error:", err));

// Routes
app.use("/api/jobs", jobRoutes); // Route mount

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
