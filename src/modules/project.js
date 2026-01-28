import { renderWeather } from "./dom.js";

export function processWeatherData(data) {
  const today = data.days[0];

  return {
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
}

export function processNextHoursData(data) {
  const todayHours = data.days[0].hours;
  const tomorrowHours = data.days[1].hours;

  const allHours = [...todayHours, ...tomorrowHours];

  const now = new Date();
  const currentHour = now.getHours();

  const nextHours = allHours.slice(currentHour, currentHour + 8);

  return nextHours;
}

export function analyzeTemperature(tempCelsius) {
  const temp = Number(tempCelsius);

  if (temp < -15) {
    return 1;
  } else if (temp >= -15 && temp < 0) {
    return 2;
  } else if (temp >= 0 && temp < 10) {
    return 3;
  } else if (temp >= 10 && temp < 20) {
    return 4;
  } else {
    return 5;
  }
}

export function showError(msg) {
  document.getElementById("results-container").innerHTML =
    `<p class="text-red-500">${msg}</p>`;
}

export async function showWeather(data) {
  const formattedData = processWeatherData(data);
  renderWeather(formattedData);
}

export function getNextFiveHours(data) {
  return processNextHoursData(data);
}

export function temperatureCheck(data) {
  const processedData = processWeatherData(data);
  return analyzeTemperature(processedData.temp);
}
