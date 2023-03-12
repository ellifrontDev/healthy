import React from "react";
import img1 from "../img/bg elements.png"
import img2 from "../img/header Image.png"
import Us from "./Us";
import About from "./About";
import Fresh from "./Fresh";
import Cook from "./Cook";
import Dish from "./Dish";
import Happy from "./Happy";
import New from "./New";
import Finish from "./Finish";
import Trust from "./Trust";
import Bring from "./Bring";


const Hero = () => {

    return(
        <div className="container">
            <div id="hero">
                <div className='hero-logo'>
                    <div className="hero-img">
                        <div>
                            <h1 className="hero-title">Just <span>Eat healthy</span>  <br/> food to live a <br/> healthier life</h1>
                            <p className="hero-desc">Enjoy a healthy life by eating healthy foods <br/>
                                that have extraordinary flavors that make <br/> your life healthier for today and in the future</p>
                            <button className="hero-btn">Order Now</button>
                        </div>
                        <div>
                            <img src={img1} alt=""/>
                            <img src={img2} className="img2" alt=""/>
                        </div>
                    </div>
                    </div>
            </div>
            <Us/>
            <About/>
            <Fresh/>
            <Cook/>
            <Dish/>
            <Happy/>
            <New/>


        </div>
    )
}
export default Hero;