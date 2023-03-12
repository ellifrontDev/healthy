import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Us from  "./components/Us";
import About from "./components/About";
import Fresh from "./components/Fresh";
import Cook  from "./components/Cook";
import Dish from "./components/Dish";
import Happy from "./components/Happy";
import New from "./components/New";
import Footer from "./components/Footer"
import Finish from "./components/Finish";
import React, {useState} from "react";
import {Routes,Route} from "react-router-dom";
import Test from "./components/Test";
import Trust from "./components/Trust";
import Bring from "./components/Bring";
import Push from "./components/Push";

function App() {
    const [light, setLight] = useState(false)
    function getDark(){
        setLight(!light)
    }
  return (
            <div className="App" style={{

                background: light ? "greenyellow" : '',
                color: light ? "white" : ""
            }}>
                <Header getDark={getDark} light={light}/>
                <Routes>
                    <Route path={'/'} element={<Hero/>}/>
                    <Route path={'/Test'} element={<Test/>}/>
                    <Route path={'/home'} element={<Hero/>}/>
                    <Route path={'/about'} element={<About/>}/>
                </Routes>

                <Footer/>
            </div>
  );
}

export default App;