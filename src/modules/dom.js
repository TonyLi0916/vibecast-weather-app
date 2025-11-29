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
    <div class="text-indigo-300 flex flex-col items-center gap-2 sm:gap-3 max-w-2xl mx-auto">
      <h2 class="text-xl sm:text-2xl md:text-3xl text-rose-400 font-extrabold text-center px-2"> ${data.city} - ${data.timeZone}</h2>
      <p class="font-science-gothic text-pink-300 text-sm sm:text-base text-center"> 🌡️ Todays Temperature Is: </p> 
      <p class="text-3xl sm:text-4xl md:text-5xl font-bold"> ${data.temp} °C </p>
      <p class="text-sm sm:text-base text-center">Today's conditions: ${data.condition}</p>  
      <p class="text-sm sm:text-base">Min: ${data.minTemp} °C Max: ${data.maxTemp} °C</p>
    </div>
    `;
};

export const renderNextHours = (hourData) => {
  nextHours.innerHTML = `
    <div class="flex justify-start sm:justify-center items-center gap-2 sm:gap-4 mt-6 overflow-x-auto pb-4 scrollbar-hide">
      ${hourData
        .map(
          (h) => `
            <div class="flex-shrink-0 p-3 sm:p-4 bg-sky-500 rounded-md w-28 sm:w-32 md:w-36 text-center shadow-lg">
              <p class="font-science-gothic font-bold text-sm sm:text-base mb-2">${h.datetime.slice(
                0,
                5
              )}</p>
              <p class="text-2xl sm:text-3xl font-bold text-indigo-700 mb-1">${Number(
                (h.temp - 32) / 1.8
              ).toFixed(1)} °C
              </p>
              <p class="text-xs sm:text-sm text-slate-800 font-medium">
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
  const vibeContent = {
    1: {
      text: "☃️ Wear a thick jacket, gloves, scarf, and consider layering up. YOU ARE AT THE NORTH POLE! 🤧",
      gif: gif1,
    },
    2: {
      text: "❄️ Wear a warm jacket, and thick pants. Go get a hot chocolate. IT IS REALLY COLD! ☕️",
      gif: gif2,
    },
    3: {
      text: "💨 Wear a bubble jacket, windbreaker, or a sweater (if you're brave). Go out and enjoy the breeze. IT IS MODERATELY COLD! ☁️",
      gif: gif3,
    },
    4: {
      text: "🍁 Wear a sweater, flannel, or even a shirt. Go enjoy the perfect temperature. IT IS WARM!",
      gif: gif4,
    },
    5: {
      text: "🥵 Wear a t-shirt, shorts, and make sure to wear sunscreen. YOU ARE IN THE DESERT! 🌵",
      gif: gif5,
    },
  };

  const content = vibeContent[num];
  if (content) {
    vibe.innerHTML = `
      <p class="max-w-2xl leading-relaxed"> ${content.text} </p>
      <img src="${content.gif}" class="w-48 sm:w-56 md:w-64 h-auto mt-3 rounded-lg shadow-lg" alt="Weather vibe illustration" />
    `;
  }
};
