'use strict';

const axios = require('axios');

async function getTemperature(name) {
  const url = `https://jsonmock.hackerrank.com/api/weather?name=${name}`;

  try {
    const response = await axios.get(url);
    const weatherData = response.data.data;

    if(weatherData.length > 0) {
      const weatherString = weatherData[0].weater;
      const temperature = parseInt(weatherString);
      return temperature;
    }
  } catch(error) {
    console.log(error);
  }

  return null;
}

async function main() {
  const temp = await getTemperature("Dallas");
  console.log(temp);
}