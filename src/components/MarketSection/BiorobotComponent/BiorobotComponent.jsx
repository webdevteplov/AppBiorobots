import React from "react";
import { useState, useEffect } from "react";
import "./BiorobotComponent.css";
import ButtonInstallComponent from "./ButtonInstallComponent/ButtonInstallComponent";

const BiorobotComponent = ({
    ico,
    componentName,
    price,
    coins,
    setCoins,
    coinsInWallet,
    setCoinsInWallet,
    left,
    setLeft,
    zIndex,
    setZIndex,
}) => {
    const [isInstallButtonDisabled, setIsInstallButtonDisabled] =
        useState(true);

    useEffect(() => {
        setIsInstallButtonDisabled(coins < price);
    }, [coins]);

    const buyComponent = (price) => {
        const lastCoin = coinsInWallet.length - price;
        let currentLeft = left;
        let currentZIndex = zIndex;

        for (let i = 0; i < price; i++) {
            currentLeft -= 7;
            currentZIndex += 1;
        }

        setLeft(currentLeft);
        setZIndex(currentZIndex);

        setCoins(coins - price);
        setCoinsInWallet(coinsInWallet.slice(0, lastCoin));
    };

    return (
        <div className="component">
            <div className="wrapper-ico_component">
                <img className="ico_component" src={ico} alt="component" />
            </div>
            <h3 className="component_title">{componentName}</h3>
            <p className="component_price">Стоимость: {price} монет</p>
            <ButtonInstallComponent
                isInstallButtonDisabled={isInstallButtonDisabled}
                buyComponent={() => buyComponent(price)}
            />
        </div>
    );
};

export default BiorobotComponent;
