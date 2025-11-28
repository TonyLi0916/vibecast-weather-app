import { showWeather } from "./project";

const results = document.querySelector("#results-container");

export const renderWeather = (data) => {
  results.innerHTML = `
    <div class="flex flex-col items-center text-indigo-300">
      <h2 class="text-xl font-bold gap-2">${data.city} - ${data.timeZone}</h2>
      <p> 🌡️ The current weather is: </p> 
      <p class="text-xl font-bold">${data.temp}° Celsius</p>
      <p>${data.desc}</p>  
      <p>Min: ${data.minTemp} Max: ${data.maxTemp}</p>
    </div>
    `;
};
