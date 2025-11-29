const results = document.querySelector("#results-container");
const nextHours = document.querySelector("#future-hours");

export const renderWeather = (data) => {
  results.innerHTML = `
    <div class="text-indigo-300 flex flex-col items-center gap-3">
      <h2 class="text-3xl text-rose-400 font-extrabold gap-2">${data.city} - ${data.timeZone}</h2>
      <p class="font-science-gothic text-pink-300"> 🌡️ The Current Weather Is: </p> 
      <p class="text-3xl font-bold">${data.temp} °C</p>
      <p>Today's conditions: ${data.condition}</p>  
      <p>Min: ${data.minTemp} °C Max: ${data.maxTemp} °C</p>
    </div>
    `;
};

export const renderNextHours = (hourData) => {
  nextHours.innerHTML = `
    <div class="flex justify-center items-center gap-4 mt-6">
      ${hourData
        .map(
          (h) => `
            <div class="p-2 bg-sky-500 rounded-md w-50 min-h-30 text-center">
              <p class="font-science-gothic font-bold">${h.datetime.slice(
                0,
                5
              )}</p>
              <p class="text-3xl font-bold text-indigo-700">${Number(
                (h.temp - 32) / 1.8
              ).toFixed(1)} °C</p>
              <p>
                ${h.conditions}
              </p>
            </div>
          `
        )
        .join("")}
    </div>
      `;
};
