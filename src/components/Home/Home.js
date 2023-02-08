import React from "react";
import "./Home.css";
import send_icon from "./prime_send.svg";
import avatar_img from "./avatar.svg";
import scroll_down_icon from "./scroll_down_icon.svg";

const Home = () => {
    return (
        <div id="home" className="Home">
            <div className="Info-avatar-wrapper">
                <div className="Basic-info-Wrapper">
                    <div className="Basic-Info">
                        <p className="Info-title">Harsh Raj</p>
                        <p className="Info-profession">
                            <span></span>
                            Android Developer
                        </p>
                    </div>
                    <p className="Info-detail">
                        I'm an android developer, and I'm very passionate <br />{" "}
                        and dedicated to my work.
                    </p>
                    <div className="Button-wrapper">
                        <a href="https://www.linkedin.com/in/harshraj9988/" target="__blank" rel="noreferrer">
                            <button>
                                say Hello <img src={send_icon} alt="" />
                            </button>
                        </a>
                    </div>
                </div>
                <div className="Avatar">
                    <img src={avatar_img} alt="" />
                </div>
            </div>
            <span className="Scroll-down">
                scroll down <img src={scroll_down_icon} alt="" />
            </span>
        </div>
    );
};

export default Home;
