import React from "react";
import img6 from "../img/Image 01.png"
import img7 from "../img/Image 02.png"
import img8 from "../img/Image 03.png"

const About = () => {

    return(
        <div className="container">
            <div id="about">
                <div className="about-logo">
                    <div>
                        <h1 className="about-title">About US</h1>
                        <p className="about-desc">Organic food is grown without the use of <br/>
                            synthetic chemicals, such as human-made <br/>
                            pesticides and fertilizers, and does not contain <br/>
                            genetically modified organisms (GMOs). <br/>
                            Organic foods include fresh produce, meats, <br/>
                            and dairy products as well as processed foods <br/> such as crackers, drinks, and frozen meals.</p>
                        <button className="about-btn">Learn More</button>
                    </div>

                    <div className="about-block">
                        <div>
                            <img src={img6} alt=""/>
                        </div>
                        <img src={img7} alt=""/>
                        <div className="block-img">
                            <img src={img8} className="block-img1" alt=""/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;