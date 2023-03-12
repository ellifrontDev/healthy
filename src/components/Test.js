import React from 'react';
import {TbMessage} from "react-icons/tb"
import image1 from "../img/Frame.svg"
import image2 from "../img/IMAGE.svg"
import Trust from "./Trust";
import Bring from "./Bring";
import Finish from "./Finish";
import Push from "./Push";
import Hear from './Hear'

const Test = () => {
    return (
        <>
            <div id="test">
                <div className="container">
                    <div className="test-logo">
                        <div>
                            <h1>I design digital <br/> products that <br/> make an impact.</h1>
                            <p>Hi! I’m Alex, a product designer based in Oakland. I <br/>
                                create user-friendly interfaces for fast-growing <br/> startups.</p>
                            <button>Hire me! <TbMessage/></button>
                            <div>
                                <img src={image1} alt="" className="image"/>
                            </div>
                        </div>
                        <div>
                            <img src={image2} alt=""/>
                        </div>
                    </div>

                </div>

            </div>
            <Trust/>
            <Bring/>
            <Push/>
            <Hear/>
        </>


    );
};

export default Test;