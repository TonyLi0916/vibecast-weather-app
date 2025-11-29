import { getWeather } from "./api";
import { renderWeather } from "./dom.js";

export function showError(msg) {
  document.getElementById(
    "results-container"
  ).innerHTML = `<p class="text-red-500">${msg}</p>`;
}

export async function showWeather(data) {
  const today = data.days[0];

  const formattedData = {
    city:
      data.address.charAt(0).toUpperCase() +
      data.address.slice(1).toLowerCase(),
    timeZone: data.timezone,
    temp: Number((today.temp - 32) / 1.8).toFixed(1),
    condition: today.conditions,
    feelsLike: today.feelslike,
    minTemp: Number((today.tempmin - 32) / 1.8).toFixed(1),
    maxTemp: Number((today.tempmax - 32) / 1.8).toFixed(1),
  };

  renderWeather(formattedData);
}

export function getNextFiveHours(data) {
  const hours = data.days[0].hours;
  const now = new Date();
  const currentHour = now.getHours();
  const nextHours = hours.slice(currentHour + 1, currentHour + 5);

  return nextHours;
}
