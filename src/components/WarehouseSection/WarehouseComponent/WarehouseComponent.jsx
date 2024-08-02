import React from "react";
import "./WarehouseComponent.css";
import ButtonSellComponent from "./ButtonSellComponent/ButtonSellComponent";

const WarehouseComponent = ({
    componentName,
    componentPrice,
    componentCount,
}) => {
    return (
        <div className="warehouse_component">
            <p className="warehouse_component-name">{componentName}</p>
            <small className="warehouse_component-price">
                Стоимость: {componentPrice} монет
            </small>
            <p className="warehouse_component-count">{componentCount} шт</p>
            <ButtonSellComponent />
        </div>
    );
};

export default WarehouseComponent;
