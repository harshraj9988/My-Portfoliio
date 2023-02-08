import React from "react";
import "./About.css";
import avatar from "./avatar_1.svg";
import doc_icon from "./doc_icon.svg";
import experience_icon from "./Vector.svg"

const About = () => {
    return (
        <div id="about" className="About">
            <p className="About-header">About me</p>
            <div className="About-section">
                <img src={avatar} alt="" />
                <div className="About-info">
                  <div className="Experience">
                      <img  src={experience_icon} alt="" />
                      <div className="Experience-info">
                          <p className="Experience-title">
                            Experience
                          </p>
                          <p className="Experience-detail">
                              1+ years of experience workin with android
                          </p>
                      </div>
                  </div>
                    <p>
                        I am an aspiring android developer. I have done multiple
                        projects and have a good understanding of technologies
                        like:
                        <ul>
                            <li>Kotlin,</li> <li>Firebase,</li>
                            <li>Room Database,</li> <li>Retrofit,</li>
                            <li>Jetpack architecture framework,</li>
                            <li>3rd Party Libraries.</li>
                        </ul>
                    </p>
                    <div className="About-button-wrapper">
                        <a
                            href="https://drive.google.com/file/d/1nPJ683p9heE0vQg5fHUPF4S8oUAO6aW-/view"
                            target="__blank"
                            rel="noreferrer"
                        >
                            <button>
                                Download resume <img src={doc_icon} alt="" />
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
