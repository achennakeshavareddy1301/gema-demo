import React from 'react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip
} from 'recharts';

const SkillsRadarChart = ({ skills }) => {
  // Transform skills data for the radar chart
  const chartData = Object.entries(skills).map(([key, value]) => ({
    skill: key.charAt(0).toUpperCase() + key.slice(1),
    score: value,
    fullMark: 10
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white px-4 py-2 shadow-lg rounded-lg border border-gray-100">
          <p className="font-semibold text-gray-800">{payload[0].payload.skill}</p>
          <p className="text-indigo-600 font-bold">{payload[0].value}/10</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">
        Skills Overview
      </h3>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={chartData}>
            <PolarGrid 
              stroke="#e5e7eb" 
              strokeDasharray="3 3"
            />
            <PolarAngleAxis 
              dataKey="skill" 
              tick={{ fill: '#4b5563', fontSize: 12, fontWeight: 500 }}
            />
            <PolarRadiusAxis 
              angle={30} 
              domain={[0, 10]} 
              tick={{ fill: '#9ca3af', fontSize: 10 }}
              tickCount={6}
            />
            <Radar
              name="Score"
              dataKey="score"
              stroke="#6366f1"
              fill="#6366f1"
              fillOpacity={0.3}
              strokeWidth={2}
            />
            <Tooltip content={<CustomTooltip />} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      <p className="text-center text-sm text-gray-500 mt-2">
        Hover over points to see detailed scores
      </p>
    </div>
  );
};

export default SkillsRadarChart;
