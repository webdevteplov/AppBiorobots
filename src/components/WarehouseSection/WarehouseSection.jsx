import React from "react";
import SectionNumber from "../SectionNumber/SectionNumber";
import "./WarehouseSection.css";
import WarehouseComponent from "./WarehouseComponent/WarehouseComponent";

const PRICE_BIOHANDS = 5;
const PRICE_MICROCHIPS = 3;
const PRICE_SOULS = 15;

const WarehouseSection = ({
    coins,
    countBiohands,
    setCountBiohands,
    countMicrochips,
    setCountMicrochips,
    countSouls,
    setCountSouls,
    addCoin,
}) => {
    const sellComponent = (price) => {
        addCoin(price);
    };

    const checkIfSellButtonDisabled = (componentCount, componentPrice) => {
        return componentCount <= 0 || coins + componentPrice > 100;
    };

    return (
        <div className="warehouse_section">
            <div className="wrapper-section_number">
                <SectionNumber>04</SectionNumber>
            </div>

            <div className="wrapper-warehouse_section">
                <h2 className="warehouse_section-title">Склад</h2>
                <div className="warehouse_section-components">
                    <WarehouseComponent
                        componentName="Биорука"
                        componentPrice={PRICE_BIOHANDS}
                        componentCount={countBiohands}
                        setComponentCount={setCountBiohands}
                        sellComponent={sellComponent}
                        coins={coins}
                        isSellButtonDisabled={checkIfSellButtonDisabled(
                            countBiohands,
                            PRICE_BIOHANDS
                        )}
                    />
                    <WarehouseComponent
                        componentName="Микрочип"
                        componentPrice={PRICE_MICROCHIPS}
                        componentCount={countMicrochips}
                        setComponentCount={setCountMicrochips}
                        sellComponent={sellComponent}
                        coins={coins}
                        isSellButtonDisabled={checkIfSellButtonDisabled(
                            countMicrochips,
                            PRICE_MICROCHIPS
                        )}
                    />
                    <WarehouseComponent
                        componentName="Душа"
                        componentPrice={PRICE_SOULS}
                        componentCount={countSouls}
                        setComponentCount={setCountSouls}
                        sellComponent={sellComponent}
                        coins={coins}
                        isSellButtonDisabled={checkIfSellButtonDisabled(
                            countSouls,
                            PRICE_SOULS
                        )}
                    />
                </div>
            </div>
        </div>
    );
};

export default WarehouseSection;
