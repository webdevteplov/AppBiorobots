import React from "react";
import "./ButtonInstallComponent.css";

const ButtonInastallComponent = ({ buyComponent, isInstallButtonDisabled }) => {
    return (
        <button
            disabled={isInstallButtonDisabled}
            onClick={buyComponent}
            className="button-install_component"
        >
            Установить
        </button>
    );
};

export default ButtonInastallComponent;
