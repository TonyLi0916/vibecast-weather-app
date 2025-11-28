import { showWeather } from "./project";

const results = document.querySelector("#results-container");

export const renderWeather = (data) => {
  results.innerHTML = `
    <div class="text-indigo-300 flex flex-col items-center gap-3">
      <h2 class="text-xl font-bold gap-2">${data.city} - ${data.timeZone}</h2>
      <p class="font-science-gothic text-pink-300"> 🌡️ The Current Weather Is: </p> 
      <p class="text-3xl font-bold">${data.temp}° Celsius</p>
      <p>${data.desc}</p>  
      <p>Min: ${data.minTemp} Max: ${data.maxTemp}</p>
      </div>
    `;
};
