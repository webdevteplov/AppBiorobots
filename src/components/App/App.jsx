import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import TitleSection from "../TitleSection/TitleSection";
import WalletSection from "../WalletSection/WalletSection";
import MarketSection from "../MarketSection/MarketSection";

const App = () => {
    const [coins, setCoins] = useState(0);

    return (
        <div className="content">
            <Header />
            <TitleSection />
            <WalletSection coins={coins} setCoins={setCoins} />
            <MarketSection />
        </div>
    );
};

export default App;
