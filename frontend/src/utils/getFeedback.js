/**
 * Helper function to get feedback text based on score
 * @param {number} score - The skill score (0-10)
 * @returns {object} - Feedback text and color class
 */
export const getFeedback = (score) => {
  if (score >= 8) {
    return {
      text: "Excellent performance with strong control.",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
      progressColor: "bg-emerald-500"
    };
  } else if (score >= 6) {
    return {
      text: "Good performance with minor inaccuracies.",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
      progressColor: "bg-amber-500"
    };
  } else {
    return {
      text: "Needs improvement.",
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      progressColor: "bg-red-500"
    };
  }
};

/**
 * Get overall score color based on score value
 * @param {number} score - The overall score
 * @returns {string} - Tailwind color classes
 */
export const getOverallScoreColor = (score) => {
  if (score >= 8) {
    return {
      bg: "bg-gradient-to-br from-emerald-400 to-emerald-600",
      text: "text-white",
      ring: "ring-emerald-200"
    };
  } else if (score >= 6) {
    return {
      bg: "bg-gradient-to-br from-amber-400 to-amber-600",
      text: "text-white",
      ring: "ring-amber-200"
    };
  } else {
    return {
      bg: "bg-gradient-to-br from-red-400 to-red-600",
      text: "text-white",
      ring: "ring-red-200"
    };
  }
};
