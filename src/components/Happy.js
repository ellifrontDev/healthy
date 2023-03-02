import React from "react";
import happyImg from "../img/avatar.png"
import happyImg2 from "../img/Arrows.png"
const Happy = () => {
    return(
        <div className="container">
            <div id="happy">
                <div className="happy-logo">

                    <h1 className="happy-title">Happy Clients Says</h1>

                    <div className="happy-box">
                        <div className="happy-block">
                            <div className="happy-titles">
                                <img src={happyImg} alt=""/>
                                <div>
                                    <h4>KHALIL NAZIR</h4>
                                    <p>CEO of UI.Desk</p>
                                </div>
                            </div>
                            <p>Thirty for remove plenty regard you summer though. <br/>
                                He preference Partiality on or continuing in particular <br/>
                                principles as. Do believing oh disposing to supported <br/> allowance we.</p>
                        </div>
                        <div className="happy-block">
                            <div className="happy-titles">
                                <img src={happyImg} alt=""/>
                                <div>
                                    <h4>KHALIL NAZIR</h4>
                                    <p>CEO of UI.Desk</p>
                                </div>
                            </div>
                            <p>Thirty for remove plenty regard you summer though. <br/>
                                He preference Partiality on or continuing in particular <br/>
                                principles as. Do believing oh disposing to supported <br/> allowance we.</p>
                        </div>
                    </div>
                    <img src={happyImg2} className="arrow" alt=""/>
                </div>
            </div>
        </div>
    )
}
export default Happy;