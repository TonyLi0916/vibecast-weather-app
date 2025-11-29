import "../src/output.css";
import { getWeather } from "./modules/api.js";
import { renderNextHours, renderVibe } from "./modules/dom.js";
import {
  getNextFiveHours,
  showError,
  showWeather,
  temperatureCheck,
} from "./modules/project.js";

const submitBtn = document.querySelector("#submit-btn");
const searchBar = document.querySelector("#search-bar");

const form = document.querySelector("#search-form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const city = searchBar.value.trim();
  if (!city) return;

  try {
    const data = await getWeather(city);
    showWeather(data);

    const hourData = getNextFiveHours(data);
    renderNextHours(hourData);

    const tempCond = temperatureCheck(data);
    renderVibe(tempCond);
  } catch (e) {
    showError(e.message);
  }
});
