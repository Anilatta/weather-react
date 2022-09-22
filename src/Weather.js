import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleSubmit(response) {
    alert(
      `Weather in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )}`
    );
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=9583d26359a57772b18997e04cbea4af&units=metric`;
  axios.get(url).then(handleSubmit);

  return <h1>Hello</h1>;
}
