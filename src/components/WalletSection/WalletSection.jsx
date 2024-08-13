import Modal from "react-modal";
import React, { useState } from "react";
import "./WalletSection.css";
import SectionNumber from "../SectionNumber/SectionNumber";
import ico_coin_big from "./icons/ico_coin_big.svg";

const WalletSection = ({
    coins,
    coinsInWallet,
    addCoin,
    isModalOpen,
    closeModal,
}) => {
    const [isEarnFiveCoinsCheckboxChecked, setIsEarnFiveCoinsCheckboxChecked] =
        useState(false);

    const customStyleModal = {
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
    };

    const handleChange = () => {
        setIsEarnFiveCoinsCheckboxChecked(!isEarnFiveCoinsCheckboxChecked);
    };

    const getNounForCoin = (number) => {
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

    const addCoinsInWallet = (event) => {
        event.preventDefault();

        addCoin(isEarnFiveCoinsCheckboxChecked ? 5 : 1);
    };

    return (
        <div className="wallet_section">
            <div className="wrapper-section_number">
                <SectionNumber>02</SectionNumber>
            </div>
            <div className="wrapper-wallet_section">
                <h2 className="wallet_section-title">Кошелёк криптовалют</h2>
                <div className="coins">{coinsInWallet.map((coin) => coin)}</div>

                <p className="count_coins">
                    <span>{coins} </span> biorobo {getNounForCoin(coins)}
                </p>
                <div className="block-change_coins">
                    <a
                        onClick={addCoinsInWallet}
                        className={`button-add_coin ${
                            coins == 100 ? "button-add_coin--disabled" : null
                        }`}
                    >
                        Нацыганить
                    </a>
                    <Modal
                        style={customStyleModal}
                        shouldCloseOnOverlayClick={false}
                        ariaHideApp={false}
                        isOpen={isModalOpen}
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
                        checked={isEarnFiveCoinsCheckboxChecked}
                        type="checkbox"
                        className="coin_checkbox"
                        id="coin_checkbox"
                        disabled={coins == 100}
                    />
                    <label htmlFor="coin_checkbox">Цыганить по 5 монет</label>
                </div>
            </div>
        </div>
    );
};

export default WalletSection;
