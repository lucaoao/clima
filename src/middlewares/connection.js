const env = require("dotenv").config().parsed;
const axios = require("axios");

const axiosInstance = axios.create({
  baseURL: "http://api.openweathermap.org/data/2.5",
  params: {
    appid: `${env.key}`,
  },
});

module.exports = axiosInstance;
