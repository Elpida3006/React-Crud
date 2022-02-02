import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AllMovies from "./AllMovies";
import reportWebVitals from "./reportWebVitals";
import Navigation from "./navigation";
import Rate from 'rc-rate';
import "rc-rate/assets/index.css";

ReactDOM.render(
  <React.StrictMode>
    <Navigation>
    <Rate />
   
      <AllMovies />
    </Navigation>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
