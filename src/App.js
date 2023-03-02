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

function App() {
  return (
    <div className="App">
      <Header/>
        <Hero/>
        <Us/>
       <About/>
        <Fresh/>
        <Cook/>
        <Dish/>
        <Happy/>
      <New/>
        <Footer/>
        <Finish/>
    </div>
  );
}

export default App;