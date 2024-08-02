import React from "react";
import "./ButtonInstallComponent.css";

const ButtonInstallComponent = ({ buyComponent, isInstallButtonDisabled }) => {
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

export default ButtonInstallComponent;
