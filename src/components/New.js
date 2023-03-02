import React from "react";

const New = () => {
    return (
        <div className="container">
            <div id="new">
                <div className="new-logo">
                    <h1 className="new-title">Subscribe to the Newsletter</h1>
                    <p className="new-desc">Enter your email below to get our daily offers and news</p>

                    <div className="new-list">
                        <input type="text" placeholder="Enter your email."/>
                        <button className="new-btn">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default New;