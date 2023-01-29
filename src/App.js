import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const name = "Bangkok";
  const apiKey = "5aa02f3e0c65f5a7a0b03250ae2d078e";
  const [city, setCity] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCity(data);
        setIsLoading(true);
      });
  }, []);
  const convertTemp = (k) => {
    return (k - 273).toFixed();
  };
  return (
    isLoading && (
      <div className="App">
        <section>
          <div className="location">
            <h1 className="city">{city.name}</h1>
            <p className="state">{city.sys.country}</p>
          </div>
          <div className="card">
            <div className="weather">
              <h1>{convertTemp(city.main.temp)}&deg;C</h1>
              <small>
                Max : {convertTemp(city.main.temp_max)}&deg;C,Min :
                {convertTemp(city.main.temp_min)}
              </small>
            </div>
            <div className="info">
              <div className="status">{city.weather[0].main}</div>
              <div className="humidity">Humidity = {city.main.humidity}</div>
              <div className="wind">Wind Speed = {city.wind.speed}</div>
            </div>
          </div>
        </section>
      </div>
    )
  );
}

export default App;
