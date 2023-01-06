// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-UNIT6-3/sw.js", {
    scope: "/ICS2O-UNIT6-3/",
  })
}

const checkWeather = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const data = await result.json()
    console.log(data)
    document.getElementById("api-weather-icon").innerHTML =
      '<img src="' +
      "https://openweathermap.org/img/wn/" +
      data.weather[0].icon +
      "@2x.png" +
      '" alt="API image" class="center" ' +
      ' width="20%" height="20%"' +
      ">"
    document.getElementById("api-weather").innerHTML =
      "<h3>" +
      data.weather[0].description +
      "</h3>" +
      "<br>" +
      "<h4> temperature: " +
      (data.main.temp - 273.15).toFixed(2) +
      " feels like: " +
      (data.main.feels_like - 273.15).toFixed(2) +
      "</h4>" +
      "<br>" +
      "<h4>wind speed: " +
      data.wind.speed +
      "</h4>"
  } catch (error) {
    console.log(error)
  }
}

checkWeather(
  "https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5"
)
