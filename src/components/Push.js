import React from 'react';
import pushImg from '../img/Frame.svg';
import pushImg2 from '../img/ref.svg'
import pushImg3 from '../img/val.svg'
import pushImg4 from '../img/arrow.svg'
import pushImg5 from '../img/volna.svg'


const Push = () => {
    return (
        <section id="push">
            <div className="container">
                <div className="push-logo">
                    <img src={pushImg} alt=""/>

                    <div className="push-block">
                        <h1 className="push-title">Pushing the <br/> boundaries of <br/>   your potential</h1>

                        <div>
                            <img src={pushImg2} alt=""/>
                            <h4 className="title4">Branding</h4>
                            <p className="push-desc">Refresh your logo, revamp your <br/>
                                website, and even your <br/> letterhead— develop a cohesive <br/> aesthetic for your brand.</p>
                        </div>
                        <div>
                            <img src={pushImg2} alt=""/>
                            <h4 className="title4">Branding</h4>
                            <p className="push-desc">Refresh your logo, revamp your <br/>
                                website, and even your <br/> letterhead— develop a cohesive <br/> aesthetic for your brand.</p>
                        </div>
                    </div>

                    <div className="memorial">
                        <div>
                            <img src={pushImg3} alt=""/>
                            <h4 className="title4">Branding</h4>
                            <p className="push-desc">Refresh your logo, revamp your <br/>
                                website, and even your <br/> letterhead— develop a cohesive <br/> aesthetic for your brand.</p>
                        </div>
                        <div>
                            <img src={pushImg4} alt=""/>
                            <h4 className="title4">Branding</h4>
                            <p className="push-desc">Refresh your logo, revamp your <br/>
                                website, and even your <br/> letterhead— develop a cohesive <br/> aesthetic for your brand.</p>
                        </div>
                        <div>
                            <button className="push-btn">Start a project</button>
                            <div>
                                <img src={pushImg5} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Push;