export const WEATHER_DATA = {
  anuradhapura: {
    cityName: "Anuradhapura",
    temperature: 31,
    humidity: 78,
    windSpeed: 14,
  },
  colombo: {
    cityName: "Colombo",
    temperature: 34,
    humidity: 58,
    windSpeed: 34,
  },
  kandy: {
    cityName: "Kandy",
    temperature: 21,
    humidity: 88,
    windSpeed: 54,
  },
  jaffna: {
    cityName: "Jaffna",
    temperature: 35,
    humidity: 78,
    windSpeed: 14,
  },
};

export const AVAILABLE_CITY = Object.values(WEATHER_DATA).map((city) => city.cityName);