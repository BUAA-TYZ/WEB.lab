import React, { useState, useEffect } from "react";
import CatHappiness from "../modules/CatHappiness.js";

import { get, post } from "../../utilities";
import "./Profile.css";

const Profile = (props) => {
  const [catHappiness, setCatHappiness] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    document.title = "Profile Page";
  }, []);

  useEffect(() => {
    get("/api/user", { userid: props.userId }).then((user) => {
      setUser(user);
      setCatHappiness(Number(user.happiness));
    });
  }, []);

  useEffect(() => {
    if (user) {
      post("/api/upuser", { happiness: catHappiness.toString() });
    }
  }, [catHappiness]);

  const incrementCatHappiness = () => {
    setCatHappiness(catHappiness + 1);
  };

  return (
    <>
      {!user ? (
        <div> Loading! </div>
      ) : (
        <>
          <div
            className="Profile-avatarContainer"
            onClick={() => {
              incrementCatHappiness();
            }}
          >
            <div className="Profile-avatar" />
          </div>
          <h1 className="Profile-name u-textCenter">{user.name}</h1>
          <hr className="Profile-line" />
          <div className="u-flex">
            <div className="Profile-subContainer u-textCenter">
              <h4 className="Profile-subTitle">About Me</h4>
              <div id="profile-description">
                I am really allergic to cats i don't know why i have a catbook
              </div>
            </div>
            <div className="Profile-subContainer u-textCenter">
              <h4 className="Profile-subTitle">Cat Happiness</h4>
              <CatHappiness catHappiness={catHappiness} />
            </div>
            <div className="Profile-subContainer u-textCenter">
              <h4 className="Profile-subTitle">My Favorite Type of Cat</h4>
              <div id="favorite-cat">corgi</div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
