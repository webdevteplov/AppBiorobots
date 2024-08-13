import React from "react";
import "./ButtonSellComponent.css";

const ButtonSellComponent = ({ isSellButtonDisabled, onSellButtonClick }) => {
    return (
        <button
            disabled={isSellButtonDisabled}
            onClick={onSellButtonClick}
            className="button-sell_component"
        >
            Продать
        </button>
    );
};

export default ButtonSellComponent;
