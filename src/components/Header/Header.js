import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <nav className="header rounded-sm">
      <h1 className="text-white header-text">
        Hello, Welcome to The React Showcase!
        <br /> Created by <p className="header-title ">George Saad</p>
      </h1>
    </nav>
  );
};

export default Header;
