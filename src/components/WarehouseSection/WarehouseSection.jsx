import React from "react";
import SectionNumber from "../SectionNumber/SectionNumber";
import "./WarehouseSection.css";
import WarehouseComponent from "./WarehouseComponent/WarehouseComponent";

const WarehouseSection = () => {
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
                        componentPrice={5}
                        componentCount={0}
                    />
                    <WarehouseComponent
                        componentName="Микрочип"
                        componentPrice={3}
                        componentCount={0}
                    />
                    <WarehouseComponent
                        componentName="Душа"
                        componentPrice={15}
                        componentCount={0}
                    />
                </div>
            </div>
        </div>
    );
};

export default WarehouseSection;
