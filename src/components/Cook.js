import React from "react";
import check from "../img/check mark.png"
import bg from "../img/Image & bg elements.png"
const Cook = () => {

    return(
        <div className="container">
            <div id="cook">
                <div className="cook-logo">
                    <div>
                        <h1 className="cook-title">Cooked by the <br/>
                            Best Chefs</h1>
                        <p className="cook-desc">Believing neglected so so allowance existence <br/>
                            departure in. In design active temper be <br/>
                            uneasy. Thirty for remove plenty regard you <br/>
                            summer though. He preference connection <br/> astonished on of ye.</p>

                        <div className="cook-box">
                            <img src={check} alt=""/>
                            <p className="cook-desc2">A guaranteed delicious meal</p>
                        </div>
                        <div className="cook-box">
                            <img src={check} alt=""/>
                            <p className="cook-desc2">Food is guaranteed hygienic</p>
                        </div>
                        <div className="cook-box">
                            <img src={check} alt=""/>
                            <p className="cook-desc2">Cooked quickly</p>
                        </div>
                    </div>

                    <div>
                        <img src={bg} alt=""/>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Cook;