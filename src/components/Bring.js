import React from 'react';
import bringImg1 from "../img/Frame (2).svg"
import bringImg2 from "../img/clo.svg"
import {BsArrowUpRight} from "react-icons/bs"
import bringImg3 from "../img/loc.svg"
import bringImg4 from "../img/Frame (3).svg"

const Bring = () => {
    return (
        <div className="container">
            <div id="bring">
                <div className="bring-logo">
                    <img src={bringImg1} alt=""/>
                    <div className="bring-block">
                        <div>
                            <img src={bringImg2} alt=""/>
                            <div className="bring-title">
                                <h2>Maize Website Design</h2>
                                <span><BsArrowUpRight/></span>
                            </div>
                            <p>Vivamus mattis eu odio non aliquam. Vestibulum tristique congue laoreet. Nulla <br/> facilisi.</p>
                        </div>
                        <div>
                            <img src={bringImg3} alt=""/>
                            <div className="bring-title">
                                <h2>Maize Website Design</h2>
                                <span><BsArrowUpRight/></span>
                            </div>
                            <p>Vivamus mattis eu odio non aliquam. Vestibulum tristique congue laoreet. Nulla <br/> facilisi.</p>
                        </div>
                    </div>
                    <div className="bring-box">
                        <img src={bringImg3} alt=""/>
                        <div className="bring-titles">
                            <h2>Maize Website Design</h2>
                            <span><BsArrowUpRight/></span>
                        </div>
                        <p>Vivamus mattis eu odio non aliquam. Vestibulum tristique congue laoreet. Nulla <br/> facilisi.</p>
                    </div>
                    <img src={bringImg4} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Bring;