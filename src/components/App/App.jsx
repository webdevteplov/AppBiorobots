import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import TitleSection from "../TitleSection/TitleSection";
import WalletSection from "../WalletSection/WalletSection";
import MarketSection from "../MarketSection/MarketSection";
import WarehouseSection from "../WarehouseSection/WarehouseSection";

const App = () => {
    const [coins, setCoins] = useState(0);
    const [coinsInWallet, setCoinsInWallet] = useState([]);
    const [left, setLeft] = useState(-7); //css стили для картинок монет
    const [zIndex, setZIndex] = useState(0); //

    return (
        <div className="content">
            <Header />
            <TitleSection />
            <WalletSection
                coins={coins}
                setCoins={setCoins}
                coinsInWallet={coinsInWallet}
                setCoinsInWallet={setCoinsInWallet}
                left={left}
                setLeft={setLeft}
                zIndex={zIndex}
                setZIndex={setZIndex}
            />
            <MarketSection
                coins={coins}
                setCoins={setCoins}
                coinsInWallet={coinsInWallet}
                setCoinsInWallet={setCoinsInWallet}
                left={left}
                setLeft={setLeft}
                zIndex={zIndex}
                setZIndex={setZIndex}
            />
            <WarehouseSection />
        </div>
    );
};

export default App;
