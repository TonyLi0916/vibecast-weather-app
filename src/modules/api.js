const API_KEY = "6LCTFLYG5SA7RDCEQ7WGE3ZKZ";
const BASE_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

export async function getWeather(city) {
  try {
    // Get forecast for next 7 days
    const response = await fetch(
      `${BASE_URL}${city}?unitGroup=us&key=${API_KEY}`,
    );

    if (!response.ok) throw new Error("Failed to fetch weather data");
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error("City not found or network error");
  }
}

export async function getHistoricalWeather(city, days = 4) {
  try {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const formatDate = (date) => {
      return date.toISOString().split("T")[0];
    };

    const start = formatDate(startDate);
    const end = formatDate(endDate);

    const response = await fetch(
      `${BASE_URL}${city}/${start}/${end}?unitGroup=us&key=${API_KEY}`,
    );

    if (!response.ok) throw new Error("Failed to fetch historical data");
    const data = await response.json();
    return data;
  } catch (e) {
    throw new Error("Failed to fetch historical weather data");
  }
}

export async function getCompleteWeatherData(city) {
  try {
    const [historical, forecast] = await Promise.all([
      getHistoricalWeather(city, 4),
      getWeather(city),
    ]);

    return {
      historical: historical,
      forecast: forecast,
    };
  } catch (e) {
    throw new Error("Failed to fetch weather data");
  }
}
