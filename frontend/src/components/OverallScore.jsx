import React from 'react';
import { getOverallScoreColor } from '../utils/getFeedback';

const OverallScore = ({ score }) => {
  const colors = getOverallScoreColor(score);
  
  const getScoreLabel = (score) => {
    if (score >= 8) return "Excellent";
    if (score >= 6) return "Good";
    return "Needs Work";
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
      <h3 className="text-lg font-semibold text-gray-600 mb-6">Overall Score</h3>
      
      {/* Score Circle */}
      <div className="relative inline-flex items-center justify-center">
        {/* Outer ring */}
        <div className={`w-40 h-40 rounded-full ${colors.bg} ${colors.ring} ring-8 flex items-center justify-center shadow-2xl`}>
          <div className="text-center">
            <span className={`text-5xl font-bold ${colors.text}`}>{score}</span>
            <span className={`text-xl ${colors.text} opacity-80`}>/10</span>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
          <svg className="w-4 h-4 text-yellow-800" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      </div>

      {/* Score Label */}
      <div className="mt-6">
        <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${colors.bg} ${colors.text}`}>
          {getScoreLabel(score)}
        </span>
      </div>

      {/* Additional Info */}
      <p className="mt-4 text-gray-500 text-sm">
        Based on pronunciation, fluency, vocabulary & grammar
      </p>
    </div>
  );
};

export default OverallScore;
