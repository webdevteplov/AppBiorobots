import React from "react";
import "./BiorobotComponent.css";
import ButtonInastallComponent from "./ButtonInstallComponent/ButtonInstallComponent";

const BiorobotComponent = ({ ico, componentName, price }) => {
    return (
        <div className="component">
            <div className="wrapper-ico_component">
                <img className="ico_component" src={ico} alt="component" />
            </div>
            <h3 className="component_title">{componentName}</h3>
            <p className="component_price">Стоимость: {price} монет</p>
            <ButtonInastallComponent />
        </div>
    );
};

export default BiorobotComponent;
