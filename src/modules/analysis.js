/**
 * Uses simple linear regression based on recent temperature trends
 */
export function predictNextDays(weatherData) {
  const days = weatherData.days.slice(-4); // Last 4 days for historical data

  const temps = days.map((day) => day.temp);

  const trend = calculateTrend(temps);

  // Generate predictions for next 3 days
  const predictions = [];
  for (let i = 1; i <= 3; i++) {
    const predictedTemp = temps[temps.length - 1] + trend * i;
    predictions.push({
      dayOffset: i,
      predictedTemp: predictedTemp,
      predictedTempCelsius: Number((predictedTemp - 32) / 1.8).toFixed(1),
      trend: trend > 0 ? "warming" : trend < 0 ? "cooling" : "stable",
    });
  }

  return predictions;
}

/**
 * Calculates simple linear trend from temperature array
 */
function calculateTrend(temps) {
  if (temps.length < 2) return 0;

  const n = temps.length;
  let sumX = 0,
    sumY = 0,
    sumXY = 0,
    sumX2 = 0;

  for (let i = 0; i < n; i++) {
    sumX += i;
    sumY += temps[i];
    sumXY += i * temps[i];
    sumX2 += i * i;
  }

  const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  return slope;
}

/**
 * Compares predictions with actual API forecast
 */
export function comparePredictions(predictions, actualData) {
  const comparisons = predictions.map((pred, index) => {
    const actualDay = actualData.days[index + 1]; // +1 because day 0 is today

    if (!actualDay) {
      return {
        dayOffset: pred.dayOffset,
        prediction: pred.predictedTempCelsius,
        actual: null,
        difference: null,
        trend: pred.trend,
        status: "no-data",
      };
    }

    const actualTempCelsius = Number((actualDay.temp - 32) / 1.8).toFixed(1);
    const difference = Math.abs(pred.predictedTempCelsius - actualTempCelsius);

    return {
      dayOffset: pred.dayOffset,
      prediction: pred.predictedTempCelsius,
      actual: actualTempCelsius,
      actualConditions: actualDay.conditions,
      difference: difference.toFixed(1),
      trend: pred.trend,
      status: difference < 2 ? "excellent" : difference < 5 ? "good" : "fair",
    };
  });

  return comparisons;
}

/**
 * Generates analysis summary
 */
export function generateAnalysisSummary(comparisons) {
  const validComparisons = comparisons.filter((c) => c.actual !== null);

  if (validComparisons.length === 0) {
    return {
      overallAccuracy: "N/A",
      averageDifference: "N/A",
      recommendation: "Insufficient data for comparison",
    };
  }

  const avgDifference =
    validComparisons.reduce((sum, c) => sum + parseFloat(c.difference), 0) /
    validComparisons.length;

  const excellentCount = validComparisons.filter(
    (c) => c.status === "excellent",
  ).length;
  const goodCount = validComparisons.filter((c) => c.status === "good").length;

  let overallAccuracy;
  if (excellentCount === validComparisons.length) {
    overallAccuracy = "Excellent";
  } else if (excellentCount + goodCount === validComparisons.length) {
    overallAccuracy = "Good";
  } else {
    overallAccuracy = "Fair";
  }

  return {
    overallAccuracy,
    averageDifference: avgDifference.toFixed(1) + "°C",
    recommendation: getRecommendation(avgDifference),
  };
}

/**
 * Provides recommendation based on prediction accuracy
 */
function getRecommendation(avgDifference) {
  if (avgDifference < 2) {
    return "Our predictions are highly accurate! You can rely on them for planning.";
  } else if (avgDifference < 5) {
    return "Our predictions are fairly accurate. Consider checking the API forecast for precision.";
  } else {
    return "Weather is unpredictable. Always check the latest API forecast before planning.";
  }
}
