import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a href="https://www.indriasariphotography.com" target={"_blank"}>
            Tessa
          </a>{" "}
          and is {""}
          <a href="https://reactweathersearchapp.netlify.app/" target="_blank">
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
