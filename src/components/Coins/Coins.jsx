import React from "react";
import ico_coin from "./icons/ico_coin.svg";

const Coins = ({ left, zIndex }) => {
    const divStyle = {
        left: left,
        zIndex: zIndex,
        position: "absolute",
    };
    return <img className="coin" style={divStyle} src={ico_coin} alt="coin" />;
};

export default Coins;
