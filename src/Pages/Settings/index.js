import React from "react";
import "./style.css";
import { useSelector } from "react-redux";

const Settings = () => {
  const user = useSelector((users) => users.loginSlice.login);
  return (
    <div className="account-info">
      <div className="account-info-box">
        <div className="profile-pictures"></div>
      </div>
    </div>
  );
};

export default Settings;
