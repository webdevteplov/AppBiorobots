import React from "react";
import ico_coin from "./icons/ico_coin.svg";

const Coin = ({ left, zIndex }) => {
    const divStyle = {
        left,
        zIndex,
        position: "absolute",
    };
    return <img className="coin" style={divStyle} src={ico_coin} alt="coin" />;
};

export default Coin;
