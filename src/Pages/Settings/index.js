import React from "react";
import "./style.css";
import { useSelector } from "react-redux";
import Accountforms from "./Accountforms";

const Settings = () => {
  const user = useSelector((users) => users.loginSlice.login);
  return (
    <div className="account-info">
      <div className="account-info-box">
        <div className="profile-pictures">
          <img src={user.photoURL} alt="profile pic" loading="lazy" />
        </div>
        <div className="account-name">
          <Accountforms />
        </div>
      </div>
    </div>
  );
};

export default Settings;
