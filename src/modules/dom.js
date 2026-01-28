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
    <div class="flex justify-start sm:justify-center items-stretch gap-2 sm:gap-4 mt-6 overflow-x-auto pb-4 scrollbar-hide">
      ${hourData
        .map(
          (h) => `
            <div class="flex-shrink-0 flex flex-col p-3 sm:p-4 bg-sky-500 rounded-md w-28 sm:w-32 md:w-36 min-h-32 sm:min-h-36 text-center shadow-lg">
              <p class="font-science-gothic font-bold text-sm sm:text-base mb-2">${h.datetime.slice(
                0,
                5,
              )}</p>
              <p class="text-2xl sm:text-3xl font-bold text-indigo-700 mb-1 whitespace-nowrap">${Number(
                (h.temp - 32) / 1.8,
              ).toFixed(1)} °C
              </p>
              <p class="text-xs sm:text-sm text-slate-800 font-medium mt-auto line-clamp-2">
                ${h.conditions}
              </p>
            </div>
          `,
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

export const renderPredictionComparison = (comparisons) => {
  const analysisContainer = document.querySelector("#analysis-container");

  if (!analysisContainer) return;

  const getTrendIcon = (trend) => {
    switch (trend) {
      case "warming":
        return "📈";
      case "cooling":
        return "📉";
      default:
        return "➡️";
    }
  };

  analysisContainer.innerHTML = `
    <div class="max-w-4xl mx-auto mt-8 px-4">
      <h3 class="text-2xl sm:text-3xl font-bold text-cyan-300 text-center mb-6">
        🔮 Prediction Analysis (Linear Regression)
      </h3>
      
      <div class="bg-slate-700 rounded-lg p-4 sm:p-6 shadow-xl">
        <div class="overflow-x-auto">
          <table class="w-full text-sm sm:text-base">
            <thead>
              <tr class="border-b border-slate-600">
                <th class="text-left py-3 px-2 text-slate-300 font-semibold">Day</th>
                <th class="text-center py-3 px-2 text-slate-300 font-semibold">Prediction</th>
                <th class="text-center py-3 px-2 text-slate-300 font-semibold">Actual</th>
                <th class="text-center py-3 px-2 text-slate-300 font-semibold">Difference</th>
              </tr>
            </thead>
            <tbody>
              ${comparisons
                .map(
                  (comp) => `
                <tr class="border-b border-slate-600 hover:bg-slate-600 transition-colors">
                  <td class="py-3 px-2 text-slate-200">
                    ${getTrendIcon(comp.trend)} Day +${comp.dayOffset}
                  </td>
                  <td class="text-center py-3 px-2 text-blue-300 font-semibold">
                    ${comp.prediction}°C
                  </td>
                  <td class="text-center py-3 px-2 text-purple-300 font-semibold">
                    ${comp.actual ? comp.actual + "°C" : "N/A"}
                    ${comp.actualConditions ? `<div class="text-xs text-slate-400">${comp.actualConditions}</div>` : ""}
                  </td>
                  <td class="text-center py-3 px-2 text-slate-300">
                    ${comp.difference ? comp.difference + "°C" : "-"}
                  </td>
                </tr>
              `,
                )
                .join("")}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;
};

export const renderAnalysisSummary = (summary) => {
  const summaryContainer = document.querySelector("#summary-container");

  if (!summaryContainer) return;

  summaryContainer.innerHTML = `
    <div class="max-w-4xl mx-auto mt-6 px-4">
      <div class="bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg p-4 sm:p-6 shadow-xl">
        <h4 class="text-xl sm:text-2xl font-bold text-emerald-300 mb-4 text-center">
          📊 Analysis Summary
        </h4>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="text-center">
            <p class="text-slate-400 text-sm mb-1">Overall Accuracy</p>
            <p class="text-2xl font-bold text-cyan-300">${summary.overallAccuracy}</p>
          </div>
          <div class="text-center">
            <p class="text-slate-400 text-sm mb-1">Avg Difference</p>
            <p class="text-2xl font-bold text-yellow-300">${summary.averageDifference}</p>
          </div>
        </div>
        <div class="mt-4 pt-4 border-t border-slate-500">
          <p class="text-slate-300 text-sm sm:text-base text-center leading-relaxed">
            💡 ${summary.recommendation}
          </p>
        </div>
      </div>
    </div>
  `;
};
