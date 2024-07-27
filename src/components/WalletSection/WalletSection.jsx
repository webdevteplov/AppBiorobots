import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import "./WalletSection.css";
import SectionNumber from "../SectionNumber/SectionNumber";
import Coins from "../Coins/Coins";

let left = -7; //css стили для картинок монет
let zIndex = 0; //

const WalletSection = ({ coins, setCoins }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [coinsInWallet, setCoinsInWallet] = useState([]);
    const [earnFiveCoinsCheckboxChecked, setEarnFiveCoinsCheckboxChecked] =
        useState(false);
    const [noanForCountCoins, setNoanForCountCoins] = useState("монет");

    const handleChange = () => {
        setEarnFiveCoinsCheckboxChecked(!earnFiveCoinsCheckboxChecked);
    };

    const getNoanForCoin = (number) => {
        const one = "монета";
        const two = "монеты";
        const five = "монет";

        number %= 100;
        const value = number % 10;

        if (number > 10 && number < 20) {
            return five;
        }

        if (value == 1) {
            return one;
        }

        if (value > 1 && value < 5) {
            return two;
        }
        return five;
    };

    const addCoin = (event) => {
        event.preventDefault();

        if (coins == 100) {
            openModal();
        } else {
            if (earnFiveCoinsCheckboxChecked == true) {
                const fiveCoins = [];
                let keyForCoin = coinsInWallet.length;

                for (let i = 0; i < 5; i++) {
                    left += 7;
                    zIndex -= 1;
                    keyForCoin += 1;

                    const coin = (
                        <Coins left={left} zIndex={zIndex} key={keyForCoin} />
                    );

                    fiveCoins.push(coin);
                }

                setCoins(coins + 5);
                setCoinsInWallet([...coinsInWallet, ...fiveCoins]);
            } else {
                left += 7;
                zIndex -= 1;
                setCoinsInWallet([
                    ...coinsInWallet,
                    <Coins
                        left={left}
                        zIndex={zIndex}
                        key={coinsInWallet.length + 1}
                    />,
                ]);
                setCoins(coins + 1);
            }
        }
    };

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const modalContent = (
        <div>
            <h2>Количество монет ограничено</h2>
            <p>Вы не можете нацыганить более 100 монет biorobo</p>
            <button onClick={closeModal}>Закрыть</button>
        </div>
    );

    return (
        <div className="wallet_section">
            <div className="wrapper-section_number">
                <SectionNumber>02</SectionNumber>
            </div>
            <div className="wrapper-wallet_section">
                <h2 className="title">Кошелёк криптовалют</h2>
                <div className="coins">{coinsInWallet.map((coin) => coin)}</div>

                <p className="count_coins">
                    <span>{coins} </span> biorobo {getNoanForCoin(coins)}
                </p>
                <div className="block-change_coins">
                    <a onClick={addCoin} className="button-add_coin" href="">
                        Нацыганить
                    </a>
                    <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                        {modalContent}
                    </Modal>
                    <input
                        onChange={handleChange}
                        checked={earnFiveCoinsCheckboxChecked}
                        type="checkbox"
                        className="coin_checkbox"
                        id="coin_checkbox"
                    />
                    <label htmlFor="coin_checkbox">Цыганить по 5 монет</label>
                </div>
            </div>
        </div>
    );
};

export default WalletSection;
