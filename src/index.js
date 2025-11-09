import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// import StarRaiting from "./StarRaiting";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <StarRaiting maxRating={5} />
    <StarRaiting
      maxRating={5}
      color="red"
      message={["Terrible", "Bad", "Okay", "Good", "Great"]}
    />
    <StarRaiting maxRating={5} size={24} color="red" /> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
