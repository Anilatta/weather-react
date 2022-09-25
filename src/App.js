import "./App.css";

import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kyiv" />
        <footer>
          This project was coded by Talina Dzhavakhadze and is open-sourced on{" "}
          <a
            href="https://github.com/Anilatta/vanilla-weather-app"
            target="_blank"
          >
            {" "}
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
