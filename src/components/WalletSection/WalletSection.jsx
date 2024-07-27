import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import "./WalletSection.css";
import SectionNumber from "../SectionNumber/SectionNumber";
import Coin from "../Coin/Coin";
import ico_coin_big from "./icons/ico_coin_big.svg";

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

        if (coins >= 100) {
            openModal();
            return;
        }
        if (earnFiveCoinsCheckboxChecked == true) {
            const fiveCoins = [];
            let keyForCoin = coinsInWallet.length;
            const limitedCountCoins = 100 - coins;

            for (let i = 0; i < 5; i++) {
                left += 7;
                zIndex -= 1;
                keyForCoin += 1;

                const coin = (
                    <Coin left={left} zIndex={zIndex} key={keyForCoin} />
                );

                fiveCoins.push(coin);
            }

            if (limitedCountCoins < 5) {
                const diffCoinsBetweenLimitedAndAllowed = fiveCoins.splice(
                    0,
                    limitedCountCoins
                );
                setCoins(coins + limitedCountCoins);
                setCoinsInWallet([
                    ...coinsInWallet,
                    ...diffCoinsBetweenLimitedAndAllowed,
                ]);
                openModal();
            } else {
                setCoins(coins + 5);
                setCoinsInWallet([...coinsInWallet, ...fiveCoins]);
            }
        } else {
            left += 7;
            zIndex -= 1;
            setCoinsInWallet([
                ...coinsInWallet,
                <Coin
                    left={left}
                    zIndex={zIndex}
                    key={coinsInWallet.length + 1}
                />,
            ]);
            setCoins(coins + 1);
        }
    };

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

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
                    <Modal
                        style={{
                            overlay: {
                                backgroundColor: "rgba(0, 0, 0, 0.67)",
                                color: "black",
                            },
                            content: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: "10px",
                                background: "#fff",
                                width: "496px",
                                height: "240px",
                                margin: "auto",
                            },
                        }}
                        shouldCloseOnOverlayClick={false}
                        ariaHideApp={false}
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        portalClassName="modal"
                    >
                        <div className="modal">
                            <div className="wrapper-ico_coin">
                                <img
                                    className="ico_coin_big"
                                    src={ico_coin_big}
                                    alt="coin"
                                />
                            </div>
                            <div className="wrapper-titles">
                                <h2 className="modal-title">
                                    Количество монет ограничено
                                </h2>
                                <p className="modal-sub_title">
                                    Вы не можете нацыганить
                                    <br />
                                    более 100 монет biorobo
                                </p>
                            </div>

                            <div
                                className="close_modal"
                                onClick={closeModal}
                            ></div>
                        </div>
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
