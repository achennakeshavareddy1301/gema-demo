# Student Assessment Report Page

A full-stack application that displays a student's speaking test assessment report, similar to SpeechAce.

## Tech Stack

- **Backend**: Node.js with Express
- **Frontend**: React (Vite) with Tailwind CSS
- **Charts**: Recharts for data visualization

## Features

- Overall score display with visual badge
- Radar chart comparing 4 skills
- Individual skill cards with progress bars
- Dynamic feedback based on scores
- Clean, professional UI design

## Project Structure

```
gema/
├── backend/
│   ├── package.json
│   └── server.js
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Header.jsx
    │   │   ├── OverallScore.jsx
    │   │   ├── ReportPage.jsx
    │   │   ├── SkillCard.jsx
    │   │   └── SkillsRadarChart.jsx
    │   ├── utils/
    │   │   └── getFeedback.js
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── index.html
    ├── package.json
    ├── tailwind.config.js
    └── vite.config.js
```

## Getting Started

### Backend Setup

```bash
cd backend
npm install
npm start
```

The server will run on http://localhost:5000

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The app will run on http://localhost:3000

## API Endpoints

- `GET /api/report` - Returns student assessment data
- `GET /api/health` - Health check endpoint

## Feedback Logic

- Score ≥ 8: "Excellent performance with strong control."
- Score 6–7.9: "Good performance with minor inaccuracies."
- Score < 6: "Needs improvement."
