import React, { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import TitleSection from "../TitleSection/TitleSection";
import WalletSection from "../WalletSection/WalletSection";
import MarketSection from "../MarketSection/MarketSection";
import WarehouseSection from "../WarehouseSection/WarehouseSection";
import Coin from "../WalletSection/Coin/Coin";

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [coins, setCoins] = useState(0);
    const [coinsInWallet, setCoinsInWallet] = useState([]);
    const [left, setLeft] = useState(-7); //css стили для картинок монет
    const [zIndex, setZIndex] = useState(0); //
    const [countBiohands, setCountBiohands] = useState(0);
    const [countMicrochips, setCountMicrochips] = useState(0);
    const [countSouls, setCountSouls] = useState(0);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const addCoin = (countCoins) => {
        if (coins >= 100) {
            openModal();
            return;
        }

        const isCoinsLimitExceeded = coins + countCoins > 100;

        const coinsToAdd = [];
        let keyForCoin = coinsInWallet.length;
        let currentLeft = left;
        let currentZIndex = zIndex;
        const diffCoinsBetweenLimitedAndAllowed = 100 - coins;
        let limitedCountCoins =
            diffCoinsBetweenLimitedAndAllowed >= countCoins
                ? countCoins
                : diffCoinsBetweenLimitedAndAllowed;

        for (let i = 0; i < limitedCountCoins; i++) {
            currentLeft += 7;
            currentZIndex -= 1;
            keyForCoin += 1;

            coinsToAdd.push(
                <Coin
                    left={currentLeft}
                    zIndex={currentZIndex}
                    key={keyForCoin}
                />
            );

            if (isCoinsLimitExceeded) {
                openModal();
            }
        }

        setLeft(currentLeft);
        setZIndex(currentZIndex);

        setCoinsInWallet([...coinsInWallet, ...coinsToAdd]);
        setCoins(coins + limitedCountCoins);
    };

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
                addCoin={addCoin}
                isModalOpen={isModalOpen}
                closeModal={closeModal}
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
                countBiohands={countBiohands}
                setCountBiohands={setCountBiohands}
                countMicrochips={countMicrochips}
                setCountMicrochips={setCountMicrochips}
                countSouls={countSouls}
                setCountSouls={setCountSouls}
            />
            <WarehouseSection
                coins={coins}
                countBiohands={countBiohands}
                setCountBiohands={setCountBiohands}
                countMicrochips={countMicrochips}
                setCountMicrochips={setCountMicrochips}
                countSouls={countSouls}
                setCountSouls={setCountSouls}
                addCoin={addCoin}
            />
        </div>
    );
};

export default App;
