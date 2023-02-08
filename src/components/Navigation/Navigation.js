import React from "react";
import "./Navigation.css";

const Navigation = () => {


    return (
        <div className="Navigation">
            <div className="Title">Harsh Raj</div>
            <div className="Menu">
                <a href="#home">
                    Home
                </a>
                <a href="#about">
                    About
                </a>
                <a href="#projects">
                    Projects
                </a>
                <a href="#skills">
                    Skills
                </a>
                <a href="#qualifications">
                    Qualifications
                </a>
                <a href="#contacts">
                    Contacts
                </a>
            </div>
        </div>
    );
};

export default Navigation;
