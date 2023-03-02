import React from "react";
import img3 from "../img/Icon.png"
import img4 from "../img/map.png"
import img5 from "../img/list.png"
const Us = () => {

    return(
        <div className="container">
            <div id="choose">
                <div className="choose-logo">

                    <h1 className="choose-title">Why Choose US?</h1>
                    <p className="choose-desc">Organic food is grown without the use of synthetic chemicals</p>
                </div>
                <div className="choose-block">
                    <div>
                        <img src={img3} alt=""/>
                        <h1 className="choose-title2">Easy to order</h1>
                        <p className="choose-desc2">foods include fresh produce, <br/> meats as well as processed</p>
                    </div>
                    <div>
                        <img src={img4} alt=""/>
                        <h1 className="choose-title2">Live Order</h1>
                        <p className="choose-desc2">Place your online Order easily <br/> and get the food instantly</p>
                    </div>
                    <div>
                        <img src={img5} alt=""/>
                        <h1 className="choose-title2">100% Organic</h1>
                        <p className="choose-desc2">Organic food is grown without <br/> the use of synthetic chemicals</p>
                    </div>
                </div>

                <div className="choose-box">
                    <div>
                        <h1 className="box-title">40+</h1>
                        <p className="box-desc">Food Partners</p>
                    </div>
                    <div>
                        <h1 className="box-title">459+</h1>
                        <p className="box-desc">Trusted Clients</p>
                    </div>
                    <div>
                        <h1 className="box-title">12k+</h1>
                        <p className="box-desc">Order Online</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Us;