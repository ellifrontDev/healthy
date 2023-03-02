import React from "react";
import dishImage from "../img/image (1).png"

const Dish = () => {
    return(
            <div className="container">
                <div id="dish">
                    <div className="dish-logo">

                        <h1 className="dish-title">Special Dishes for you</h1>
                        <p className="dish-desc">Made with premium & 100% Organic ingredients</p>

                        <div className="block">
                            <div className="dish-box">
                                <img src={dishImage} alt=""/>
                                <h2 className="dish-tit">Green Salad</h2>
                                <p className="dish-desc2">A salad combined witha delicious <br/>
                                    cut of bacon and mixed with tasty <br/>
                                    and fresh sesome oil.</p>
                            </div>
                            <div className="dish-box">
                                <img src={dishImage} alt=""/>
                                <h2 className="dish-tit">Green Salad</h2>
                                <p className="dish-desc2">A salad combined witha delicious <br/>
                                    cut of bacon and mixed with tasty <br/>
                                    and fresh sesome oil.</p>
                            </div>
                            <div className="dish-box">
                                <img src={dishImage} alt=""/>
                                <h2 className="dish-tit">Green Salad</h2>
                                <p className="dish-desc2">A salad combined witha delicious <br/>
                                    cut of bacon and mixed with tasty <br/>
                                    and fresh sesome oil.</p>
                            </div>
                        </div>

                        <button className="dish-btn">View All</button>

                    </div>
                </div>
            </div>

    )
}
export default Dish;