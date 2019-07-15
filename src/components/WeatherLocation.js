//Se importa 'react' del package React
import React from 'react';
//Se importa el modulo Location
import Location from './Location';
//Se importa el modulo WheatherData
import WeatherData from "./WeatherData";

//Se genera una constante con una arrow function
//con el componenete que queremos renderizar y lo que esta dentro es lo el cuerpo del componente
const WeatherLocation = () => (
   //Dentro del componente WeatherLocation se meterá  el componente Location
   //DEntro del componente Location se le pasa una variable city={"Carmen de La Laja"}
   <div>
      <Location city ={"Monterrey"} ></Location>
      <WeatherData></WeatherData>
   </div>
);

//Se exporta para poder utilizarlo en otra parte del proyecto
export default WeatherLocation;