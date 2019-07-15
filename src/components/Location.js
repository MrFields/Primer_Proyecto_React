//Se importa 'react' desde el el package React
import React from 'react';

//Se crea un componente con el nombre de Location
//se le pasa un parametro llamado props
const Location = ({city}) => {
   // Destructuring es una tecnica de ES6 cuando tenemos una propiedad con un nombre que luego queremos
   // asiganar a una variable o constante con el mismo nombre que la propiedad la podemos asignar de forma diecta
   // utilizando esta tecnica 
   //const {city} = props;

   //console.log(props)
   //debugger;

   return(
      <div>
         <h1>{city}</h1>
      </div>
   );
};

//lo exportamos para utilizarlo en otross
export default Location;