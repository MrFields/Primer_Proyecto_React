//Se importan los modulos que previamente creamos a excepcion de 'react'
import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

const WeatherData = () => (
   <div>
      <WeatherTemperature/>
      <WeatherExtraInfo/>
   </div>
);

export default WeatherData;