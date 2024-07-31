import React from "react";
import SectionNumber from "../SectionNumber/SectionNumber";
import BiorobotComponent from "./BiorobotComponent/BiorobotComponent";
import ico_biohand from "./icons/ico_biohand.svg";
import ico_microchip from "./icons/ico_microchip.svg";
import ico_soul from "./icons/ico_soul.svg";
import "./MarketSection.css";

const MarketSection = ({
    coins,
    setCoins,
    coinsInWallet,
    setCoinsInWallet,
    left,
    setLeft,
    zIndex,
    setZIndex,
}) => {
    return (
        <div className="market_section">
            <div className="wrapper-section_number">
                <SectionNumber>03</SectionNumber>
            </div>
            <div className="wrapper-market_section">
                <h2 className="market_section-title">Рынок комплектующих</h2>
                <div className="components">
                    <BiorobotComponent
                        ico={ico_biohand}
                        componentName={"Биорука"}
                        price={7}
                        coins={coins}
                        setCoins={setCoins}
                        coinsInWallet={coinsInWallet}
                        setCoinsInWallet={setCoinsInWallet}
                        left={left}
                        setLeft={setLeft}
                        zIndex={zIndex}
                        setZIndex={setZIndex}
                    />
                    <BiorobotComponent
                        ico={ico_microchip}
                        componentName={"Микрочип"}
                        price={5}
                        coins={coins}
                        setCoins={setCoins}
                        coinsInWallet={coinsInWallet}
                        setCoinsInWallet={setCoinsInWallet}
                        left={left}
                        setLeft={setLeft}
                        zIndex={zIndex}
                        setZIndex={setZIndex}
                    />
                    <BiorobotComponent
                        ico={ico_soul}
                        componentName={"Душа"}
                        price={25}
                        coins={coins}
                        setCoins={setCoins}
                        coinsInWallet={coinsInWallet}
                        setCoinsInWallet={setCoinsInWallet}
                        left={left}
                        setLeft={setLeft}
                        zIndex={zIndex}
                        setZIndex={setZIndex}
                    />
                </div>
            </div>
        </div>
    );
};

export default MarketSection;
