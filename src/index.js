import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app.jsx";
import Youtube from "./service/youtube";

const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
//여기에 import를 하면 앱이 켜질 때 딱 한번만 객체가 만들어진다.

ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube} />
  </React.StrictMode>,
  document.getElementById("root")
);
