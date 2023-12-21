import axios from "axios";


export const forecastEndpoint = (param) => `https://api.weatherapi.com/v1/forecast.json?key=${process.env.APIKEY}&q=${param.cityName}&days=${param.days}&aqi=no&alerts=no`;
export const locationEndpoint = (param) => `https://api.weatherapi.com/v1/search.json?key=${process.env.APIKEY}&q=${param.cityName}`;
