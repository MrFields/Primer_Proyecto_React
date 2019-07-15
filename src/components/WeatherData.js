//Se importan los modulos que previamente creamos a excepcion de 'react'
import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

const WeatherData = () => (
   <div>
      <WeatherTemperature/>
      <WeatherExtraInfo humidity={80} wind={"10 m/s"}/>
   </div>
);

export default WeatherData;