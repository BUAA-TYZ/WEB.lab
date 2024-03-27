import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import { GoogleLogin } from "@react-oauth/google";

import { Router } from "@reach/router";
import "./NavBar.css";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
const NavBar = (props) => {
  return (
    <nav className="NavBar-container">
      <div className="NavBar-title u-inlineBlock">Catbook</div>
      <div className="NavBar-linkContainer u-inlineBlock">
        <Link to="/" className="NavBar-link">
          Home
        </Link>
        {props.userId && (
          <Link to={`/profile/${props.userId}`} className="NavBar-link">
            Profile
          </Link>
        )}
        {props.userId ? (
          <Link to="/" className="NavBar-link NavBar-login">
            <button onClick={props.handleLogout} path="/" className="NavBar-logout">
              Logout
            </button>
          </Link>
        ) : (
          <GoogleLogin
            onSuccess={props.handleLogin}
            onFailure={(err) => console.log(err)}
            className="NavBar-link NavBar-login"
          />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
