import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const fetchWeather = async (city) => {
  return axios.get(`${API_BASE_URL}/weather/${city}`);
};

export const fetchSearchHistory = async () => {
  return axios.get(`${API_BASE_URL}/weather/history`);
};
