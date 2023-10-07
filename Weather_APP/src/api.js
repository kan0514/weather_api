const url = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities/Q60/dateTime";
export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ada1031c8emshe5e9a4c49a8253ep1be842jsn7c281eece9db", // enter your rapid api key here
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};
try {
  const response = await fetch(url, geoApiOptions);
  const result = await response.text();
  console.log(result);
} catch (error) {
  console.error(error);
}
export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "7b4eba487b8f195a01ad85737f60d2bf"; // enter your key from openweather API
