import React from "react";
import ButtonProduceBiorobot from "./ButtonProduceBiorobot/ButtonProduceBiorobot";
import logo from "./icons/logo.svg";
import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="logo" />
            <ButtonProduceBiorobot>Произвести биоробота</ButtonProduceBiorobot>
        </div>
    );
};

export default Header;
