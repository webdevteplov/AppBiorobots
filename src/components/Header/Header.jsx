import React from "react";
import ButtonStrokeOrange from "../ButtonStrokeOrange/ButtonStrokeOrange";
import logo from "./icons/logo.svg";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo" />
            <ButtonStrokeOrange>Произвести биоробота</ButtonStrokeOrange>
        </div>
    );
};

export default Header;
