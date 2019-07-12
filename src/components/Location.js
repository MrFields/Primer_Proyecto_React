//Se importa 'react' desde el el package React
import React from 'react';

//Se crea un componente con el nombre de Location
//se le pasa un parametro llamado props
const Location = (props) => {
   console.log(props)
   debugger;

   return(
   <div><h1>Mejico</h1></div>);
};

//lo exportamos para utilizarlo en otross
export default Location;