import React, { useState, useEffect } from 'react';
import Header from './Header';
import OverallScore from './OverallScore';
import SkillCard from './SkillCard';
import SkillsRadarChart from './SkillsRadarChart';

const ReportPage = () => {
  const [reportData, setReportData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/report');
        if (!response.ok) {
          throw new Error('Failed to fetch report data');
        }
        const data = await response.json();
        setReportData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReport();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading report...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Error Loading Report</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <p className="text-sm text-gray-500">
            Make sure the backend server is running on port 5000
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const { student_name, test_date, overall_score, skills } = reportData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header studentName={student_name} testDate={test_date} />
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Assessment Report</h1>
          <p className="text-gray-600 mt-1">Speaking Test Performance Analysis</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Overall Score Card */}
          <div className="lg:col-span-1">
            <OverallScore score={overall_score} />
          </div>

          {/* Radar Chart */}
          <div className="lg:col-span-2">
            <SkillsRadarChart skills={skills} />
          </div>
        </div>

        {/* Skills Breakdown Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Detailed Score Breakdown
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SkillCard skillName="Pronunciation" score={skills.pronunciation} />
            <SkillCard skillName="Fluency" score={skills.fluency} />
            <SkillCard skillName="Vocabulary" score={skills.vocabulary} />
            <SkillCard skillName="Grammar" score={skills.grammar} />
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Summary & Recommendations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Strengths */}
            <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
              <h3 className="font-semibold text-emerald-800 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Strengths
              </h3>
              <ul className="text-sm text-emerald-700 space-y-1">
                {Object.entries(skills)
                  .filter(([_, score]) => score >= 8)
                  .map(([skill, score]) => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                      {skill.charAt(0).toUpperCase() + skill.slice(1)} ({score}/10)
                    </li>
                  ))}
                {Object.entries(skills).filter(([_, score]) => score >= 8).length === 0 && (
                  <li className="text-gray-500 italic">No areas scoring above 8</li>
                )}
              </ul>
            </div>

            {/* Areas for Improvement */}
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
              <h3 className="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Areas for Improvement
              </h3>
              <ul className="text-sm text-amber-700 space-y-1">
                {Object.entries(skills)
                  .filter(([_, score]) => score < 8)
                  .map(([skill, score]) => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                      {skill.charAt(0).toUpperCase() + skill.slice(1)} ({score}/10)
                    </li>
                  ))}
                {Object.entries(skills).filter(([_, score]) => score < 8).length === 0 && (
                  <li className="text-gray-500 italic">All areas performing well!</li>
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-center text-gray-500 text-sm">
          <p>© 2025 SpeechAce Assessment Platform. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

export default ReportPage;
