//import React from 'react';
import React, {Component} from 'react';
//importamos el componente de WheatherLocation
import WeatherLocation from './components/WeatherLocation';
import './App.css';

class App extends Component {
  render()
  {
    return (
      <div className="App">
          <WeatherLocation></WeatherLocation>
    </div>
    );
  }
}
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Creando Wheather App
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
