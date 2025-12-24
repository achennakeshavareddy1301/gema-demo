import React from 'react';
import { getFeedback } from '../utils/getFeedback';

const SkillCard = ({ skillName, score, icon }) => {
  const feedback = getFeedback(score);
  const progressWidth = (score / 10) * 100;

  const getIcon = (name) => {
    const icons = {
      Pronunciation: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      Fluency: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      Vocabulary: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      Grammar: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    };
    return icons[name] || icons.Pronunciation;
  };

  return (
    <div className={`bg-white rounded-xl shadow-md p-5 border-l-4 ${feedback.borderColor} hover:shadow-lg transition-shadow duration-300`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-lg ${feedback.bgColor} ${feedback.color} flex items-center justify-center`}>
            {getIcon(skillName)}
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">{skillName}</h4>
            <p className="text-xs text-gray-500">Speaking skill</p>
          </div>
        </div>
        <div className="text-right">
          <span className={`text-2xl font-bold ${feedback.color}`}>{score}</span>
          <span className="text-gray-400 text-sm">/10</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-3">
        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className={`h-full ${feedback.progressColor} rounded-full transition-all duration-500 ease-out`}
            style={{ width: `${progressWidth}%` }}
          />
        </div>
      </div>

      {/* Feedback */}
      <div className={`${feedback.bgColor} rounded-lg p-3`}>
        <p className={`text-sm ${feedback.color}`}>
          {feedback.text}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
