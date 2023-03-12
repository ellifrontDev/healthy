import React from "react";
import {AiOutlineSearch} from "react-icons/ai"
import {AiOutlineShoppingCart} from "react-icons/ai"
import {NavLink} from "react-router-dom";
import {useState} from "react";

const Header = ({getDark,light}) => {
    const [input,setInput] = useState(false)
    return (
     <div id="header" style={{
         background: light ? "greenyellow" : '',
         color: light ? "white": ""
     }}>
         <div className="container">
             <div className="header">
                 <div className="header-logo">
                     <NavLink to={'/'}>
                         <h1 className="header-title">UI.desk</h1>
                     </NavLink>

                     <div className="desc">
                       <NavLink to={'/home'} className="header-span">Home</NavLink>
                         <a href="#">About</a>
                         <a href="#">Contact</a>

                         <NavLink to={'/Test'}>
                               Testimonials
                         </NavLink>

                     </div>
                     <div className="header-icon">
                         <div className='search'>
                             <input style={{
                                 display: input ? 'block' : setTimeout(() =>{
                                     'none'
                                 },500),
                                 transition: '.4s',
                                 transform: !input ?'translateX(400px)' : '',
                             }} type="text" className={`search-input ${input ? 'open-search' : 'close-search'}`} placeholder="search..."/>
                         </div>

                         <h1 onClick={()=> setInput(!input)}><AiOutlineSearch style={{cursor:'pointer'}}/></h1>

                             <h1> <AiOutlineShoppingCart/> </h1>
                         <button className="btn-1" onClick={() => getDark(light)}>Order Now</button>
                     </div>
                 </div>
             </div>
         </div>
     </div>
    )
}
export default Header;