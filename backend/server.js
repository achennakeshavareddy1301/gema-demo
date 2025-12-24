const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Enable CORS for frontend requests
app.use(cors());
app.use(express.json());

// Mock database - Student's speaking test results
const studentReport = {
  student_name: "Jeevan Chopra",
  test_date: "Oct 14, 2025",
  overall_score: 7,
  skills: {
    pronunciation: 8.3,
    fluency: 9,
    vocabulary: 6.2,
    grammar: 6.2
  }
};

// GET endpoint to return student report data
app.get('/api/report', (req, res) => {
  res.json(studentReport);
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
