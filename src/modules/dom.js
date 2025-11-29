import gif1 from "../imgs/1.gif";
import gif2 from "../imgs/2.gif";
import gif3 from "../imgs/3.gif";
import gif4 from "../imgs/4.gif";
import gif5 from "../imgs/5.gif";

const results = document.querySelector("#results-container");
const nextHours = document.querySelector("#future-hours");
const vibe = document.querySelector("#outfit-suggestion");

export const renderWeather = (data) => {
  results.innerHTML = `
    <div class="text-indigo-300 flex flex-col items-center gap-3">
      <h2 class="text-3xl text-rose-400 font-extrabold gap-2"> ${data.city} - ${data.timeZone}</h2>
      <p class="font-science-gothic text-pink-300"> 🌡️ Todays Temperature Is: </p> 
      <p class="text-3xl font-bold"> ${data.temp} °C </p>
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

export const renderVibe = (num) => {
  switch (num) {
    case 1:
      vibe.innerHTML = `
      <p> ☃️ Wear a thick jacket, gloves, scarf, and consider layering up. YOU ARE AT THE NORTH POLE! 🤧 </p>
      <img src="${gif1}" class="w-30 h-auto" />
      `;
      break;
    case 2:
      vibe.innerHTML = `
      <p> ❄️ Wear a warm jacket, and thick pants. Go get a hot chocolate. IT IS REALLY COLD! ☕️ </p>
      <img src="${gif2}" class="w-30 h-auto" />
      `;
      break;
    case 3:
      vibe.innerHTML = `
      <p> 💨 Wear a bubble jacket, windbreaker, or a sweater (if you're brave). Go out and enjoy the breeze. IT IS MODERATELY COLD! ☁️ </p>
      <img src="${gif3}" class="w-30 h-auto" />
      `;
      break;
    case 4:
      vibe.innerHTML = `
        <p> 🍁 Wear a sweater, flannel, or even a shirt. Go enjoy the perfect temperature. IT IS WARM! </p>
        <img src="${gif4}" class="w-30 h-auto" />
        `;
      break;
    case 5:
      vibe.innerHTML = `
        <p> 🥵 Wear a t-shirt, shorts, and make sure to wear sunscreen. YOU ARE IN THE DESERT! 🌵 </p>
        <img src="${gif5}" class="w-30 h-auto" />
        `;
      break;
  }
};
