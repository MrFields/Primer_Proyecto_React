//Se importa 'react' desde el package REACT
import React from 'react';

//Se crea un modulo que contrentra información extra para el contenedor
const WeatherExtraInfo = ({humidity, wind}) => (
   <div>
      <span>{`${humidity} % - `}</span>
      <span>{`${wind} viento`}</span>
   </div>
);
//Se exporta el modulo para utilizarlo en algun otro lugar de la aplicación
export default WeatherExtraInfo;