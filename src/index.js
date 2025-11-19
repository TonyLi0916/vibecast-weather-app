import "../src/output.css";
import { getWeather } from "./modules/api.js";
import { showError, showWeather } from "./modules/project.js";

const submitBtn = document.querySelector("#submit-btn");
const searchBar = document.querySelector("#search-bar");

submitBtn.addEventListener("click", async () => {
  const city = searchBar.value.trim();

  try {
    const data = await getWeather(city);
    showWeather(data);
  } catch (err) {
    showError(err.message);
  }
});
