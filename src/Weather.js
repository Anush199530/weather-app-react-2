import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Brussel",
    date: "14/11/2023",
    houre: "16:15",
    description: "Rainning",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/rain.png",
    Humidity: "80",
    Wind: "70",
    temperature: "5",
  };

  return (
    <div className="weatherApp-wrapper">
      <div className="weatherApp">
        <div className="row">
          <div className="col-md-6">
            <form>
              <input
                type="Search"
                placeholder="Type a city....."
                className="form-control"
                autocomplete="off"
              />
              <div className="col-3">
                <input
                  type="submit"
                  value="search"
                  className="btn btn-primary w-100"
                  autocomplete="off"
                />
              </div>
            </form>
            <div className="current-overvieuw">
              <h1> {weatherData.city} </h1>
              <ul>
                <li>
                  Last updated:
                  <span>
                    {" "}
                    {weatherData.date} at {weatherData.houre}
                  </span>
                </li>
                <li> {weatherData.description}</li>
              </ul>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="d-flex weather-temperature">
                  <img src={weatherData.imgUrl} alt="" className="icon" />
                  <div className="temperatureOverview">
                    <strong></strong>
                    <span className="units">
                      <a href="#" className="active">
                        {weatherData.temperature} °C
                      </a>
                      |<a href="#">°F</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <ul>
                  <li>
                    Humidity:<span>{weatherData.Humidity}</span>%
                  </li>
                  <li>
                    Wind: <span>{weatherData.Wind}</span> km/h
                  </li>
                </ul>
              </div>
              <div className="weather-forcast"></div>
            </div>
          </div>
        </div>

        <small>
          <a
            href="https://github.com/Anush199530/weather-app-react-2"
            target="_blank"
          >
            {" "}
            Open-source code,{" "}
          </a>
          by Anush Arutunian
        </small>
      </div>
    </div>
  );
}
