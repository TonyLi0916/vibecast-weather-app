import "../src/output.css";
import { getCompleteWeatherData } from "./modules/api.js";
import {
  renderNextHours,
  renderVibe,
  renderPredictionComparison,
  renderAnalysisSummary,
} from "./modules/dom.js";
import {
  getNextFiveHours,
  showError,
  showWeather,
  temperatureCheck,
} from "./modules/project.js";
import {
  predictNextDays,
  comparePredictions,
  generateAnalysisSummary,
} from "./modules/analysis.js";

const submitBtn = document.querySelector("#submit-btn");
const searchBar = document.querySelector("#search-bar");

const form = document.querySelector("#search-form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const city = searchBar.value.trim();
  if (!city) return;

  try {
    const { historical, forecast } = await getCompleteWeatherData(city);

    console.log("Historical data:", historical.days);
    console.log("Forecast data:", forecast.days);

    showWeather(forecast);

    const hourData = getNextFiveHours(forecast);
    renderNextHours(hourData);

    const tempCond = temperatureCheck(forecast);
    renderVibe(tempCond);

    const predictions = predictNextDays(historical);
    console.log("Generated Predictions (from real history):", predictions);

    const comparisons = comparePredictions(predictions, forecast);
    console.log("Prediction Comparisons:", comparisons);
    renderPredictionComparison(comparisons);

    const summary = generateAnalysisSummary(comparisons);
    renderAnalysisSummary(summary);
  } catch (e) {
    showError(e.message);
  }
});
// Set copyright year
document.getElementById("year").textContent = new Date().getFullYear();
