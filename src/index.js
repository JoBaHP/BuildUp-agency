import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import WebFont from "webfontloader";

import ReactGA from "react-ga4";

ReactGA.initialize("G-T5ZFTSCM3D");
ReactGA.send("pageview");

WebFont.load({
  google: {
    families: ["Raleway:300,600,700", "sans-serif"],
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
