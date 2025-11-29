import "../src/output.css";
import { getWeather } from "./modules/api.js";
import { renderNextHours } from "./modules/dom.js";
import { getNextFiveHours, showError, showWeather } from "./modules/project.js";

const submitBtn = document.querySelector("#submit-btn");
const searchBar = document.querySelector("#search-bar");

const form = document.querySelector("#search-form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
});

submitBtn.addEventListener("click", async () => {
  const city = searchBar.value.trim();

  try {
    const data = await getWeather(city);
    showWeather(data);

    const hourData = getNextFiveHours(data);
    renderNextHours(hourData);
  } catch (err) {
    showError(err.message);
  }
});
