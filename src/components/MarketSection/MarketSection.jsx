import React from "react";
import SectionNumber from "../SectionNumber/SectionNumber";
import BiorobotComponent from "./BiorobotComponent/BiorobotComponent";
import ico_biohand from "./icons/ico_biohand.svg";
import ico_microchip from "./icons/ico_microchip.svg";
import ico_soul from "./icons/ico_soul.svg";
import "./MarketSection.css";

const PRICE_BIOHANDS = 7;
const PRICE_MICROCHIPS = 5;
const PRICE_SOULS = 25;

const MarketSection = ({
    coins,
    setCoins,
    coinsInWallet,
    setCoinsInWallet,
    left,
    setLeft,
    zIndex,
    setZIndex,
    countBiohands,
    setCountBiohands,
    countMicrochips,
    setCountMicrochips,
    countSouls,
    setCountSouls,
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
                        componentName="Биорука"
                        price={PRICE_BIOHANDS}
                        coins={coins}
                        setCoins={setCoins}
                        coinsInWallet={coinsInWallet}
                        setCoinsInWallet={setCoinsInWallet}
                        left={left}
                        setLeft={setLeft}
                        zIndex={zIndex}
                        setZIndex={setZIndex}
                        countComponents={countBiohands}
                        setCountComponents={setCountBiohands}
                    />
                    <BiorobotComponent
                        ico={ico_microchip}
                        componentName="Микрочип"
                        price={PRICE_MICROCHIPS}
                        coins={coins}
                        setCoins={setCoins}
                        coinsInWallet={coinsInWallet}
                        setCoinsInWallet={setCoinsInWallet}
                        left={left}
                        setLeft={setLeft}
                        zIndex={zIndex}
                        setZIndex={setZIndex}
                        countComponents={countMicrochips}
                        setCountComponents={setCountMicrochips}
                    />
                    <BiorobotComponent
                        ico={ico_soul}
                        componentName="Душа"
                        price={PRICE_SOULS}
                        coins={coins}
                        setCoins={setCoins}
                        coinsInWallet={coinsInWallet}
                        setCoinsInWallet={setCoinsInWallet}
                        left={left}
                        setLeft={setLeft}
                        zIndex={zIndex}
                        setZIndex={setZIndex}
                        countComponents={countSouls}
                        setCountComponents={setCountSouls}
                    />
                </div>
            </div>
        </div>
    );
};

export default MarketSection;
