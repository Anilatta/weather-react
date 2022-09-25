import React, { useState } from "react";
import axios from "axios";
export default function Weather() {
  return (
    <div id="root">
      <div className="App">
        <div className="container">
          <div className="Weather">
            <form id="search-form">
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Enter a city.."
                    className="form-control search-input"
                    id="city-input"
                    autocomplete="off"
                  />
                </div>
                <div className="col-3 p-0">
                  <input
                    type="submit"
                    className="btn btn-primary w-100"
                    value="Search"
                  />
                </div>
              </div>
            </form>
            <div className="WeatherInfo">
              <div className="row">
                <div className="col-6">
                  <h1 id="city">New York</h1>
                  <ul>
                    <li>
                      Last updated:
                      <span id="date">Monday 09:49</span>,
                      <div id="description">clear sky</div>
                    </li>
                    <li>
                      Humidity:{" "}
                      <strong>
                        <span id="humidity">48</span>%
                      </strong>
                      , Wind:
                      <strong>
                        <span id="wind">4.12</span>m/s
                      </strong>
                    </li>
                  </ul>
                </div>
                <div className="col-6">
                  <div className="temperature-container d-flex justify-content-end">
                    <canvas width="52" height="52"></canvas>
                    <img src="" alt="Clear" id="icon" className="float-left" />
                    <div>
                      <span className="temperature" id="temperature">
                        20
                      </span>
                      <span className="unit">
                        <a href="#" id="celcius-link" className="active">
                          °C
                        </a>
                        |
                        <a href="#" id="fahrenheit-link">
                          °F
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="weather-forecast" id="forecast"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
