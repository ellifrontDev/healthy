import React from "react";
import img9 from "../img/image.png"

const Fresh = () => {

    return (
      <div className="container">
          <div id="fresh">
              <div className="fresh-logo">
                  <div>
                      <img src={img9} alt=""/>
                  </div>

                  <div className="fresh-box">
                      <h1 className="fresh-title" >Fresh Vegetables <br/>
                          Every Day</h1>
                      <p className="fresh-desc">Healthy life as informed declared we enjoy the <br/>
                          margaret. Joy horrible moreover man feelings <br/>
                          own shy. Request norland neither mistake for yet. <br/> Between the for morning assured country believe.</p>
                      <button className="fresh-btn">Learn More</button>
                  </div>
              </div>
          </div>
      </div>
    )
}
export default Fresh;