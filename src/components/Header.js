import React from "react";
import {AiOutlineSearch} from "react-icons/ai"
import {AiOutlineShoppingCart} from "react-icons/ai"

const Header = () => {
    return (
     <div id="header">
         <div className="container">
             <div className="header">
                 <div className="header-logo">
                         <h1 className="header-title">UI.desk</h1>
                     <div className="desc">
                       <a href="" className="header-span">Home</a>
                         <a href="">About</a>
                         <a href="">Contact</a>
                         <a href="">Testimonials</a>
                     </div>
                     <div className="header-icon">
                         <h1> <AiOutlineSearch/></h1>
                         <h1> <AiOutlineShoppingCart/> </h1>
                         <button className="btn-1">Order Now</button>
                     </div>

                 </div>
             </div>
         </div>
     </div>
    )
}
export default Header;