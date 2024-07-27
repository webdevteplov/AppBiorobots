import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import TitleSection from "../TitleSection/TitleSection";
import WalletSection from "../WalletSection/WalletSection";

const App = () => {
    const [coins, setCoins] = useState(0);

    return (
        <div className="content">
            <Header />
            <TitleSection />
            <WalletSection coins={coins} setCoins={setCoins} />
        </div>
    );
};

export default App;
