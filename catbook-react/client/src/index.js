import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import { GoogleOAuthProvider } from "@react-oauth/google";

const config = require("./config.js");

// renders React Component "Root" into the DOM element with ID "root"
ReactDOM.render(
  <GoogleOAuthProvider clientId={config.GOOGLE_CLIENT_ID}>
    <App />
  </GoogleOAuthProvider>,
  document.getElementById("root")
);

// allows for live updating
module.hot.accept();
