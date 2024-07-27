import React from "react";
import robotsImg from "./img/robots.png";
import "./TitleSection.css";
import SectionNumber from "../SectionNumber/SectionNumber";

const TitleSection = () => {
    return (
        <div className="title_section">
            <SectionNumber>01</SectionNumber>
            <div className="title_block">
                <h1 className="main-title">
                    Фабрика по производству биороботов
                </h1>
                <p className="sub_title">класса "монитор-кресло"</p>
            </div>
            <img className="img_robots" src={robotsImg} alt="robots" />
        </div>
    );
};

export default TitleSection;
