const API_KEY = "6LCTFLYG5SA7RDCEQ7WGE3ZKZ";
const BASE_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

// asynchronous function that hits the API
export async function getWeather(city) {
  try {
    const response = await fetch(`${BASE_URL}${city}/?key=${API_KEY}`); // wait for response
    // if status error we throw an error
    if (!response.ok) throw new Error("Failed to fetch weather data");
    const data = await response.json();
    return data; // return json data
  } catch (e) {
    console.log(e);
    return null;
  }
}
