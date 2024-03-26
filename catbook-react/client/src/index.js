import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import { GoogleOAuthProvider } from "@react-oauth/google";

// renders React Component "Root" into the DOM element with ID "root"
ReactDOM.render(
  <GoogleOAuthProvider clientId="190195550943-4o7bglcoqt1mf0j912a2jhrm5657fuah.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>,
  document.getElementById("root")
);

// allows for live updating
module.hot.accept();
