import { getWeather } from "./api";
import { renderWeather } from "./dom";

const city = "Markham";

export function showError(msg) {
  document.getElementById(
    "results-container"
  ).innerHTML = `<p class="text-red-500">${msg}</p>`;
}

export async function showWeather(data) {
  const today = data.days[0];

  const formattedData = {
    city: data.address,
    timeZone: data.timezone,
    temp: today.temp,
    feelsLike: today.feelslike,
    minTemp: today.tempmin,
    maxTemp: today.tempmax,
    conditions: today.conditions,
    desc: today.description,
  };

  renderWeather(formattedData);
}
