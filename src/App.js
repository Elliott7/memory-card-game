import './App.css';
import NavBar from "./components/NavBar/NavBar";
import DivisionLine from "./components/DivisionLine/DivisionLine";
import React, {useState} from "react";

const data = {
    "Pokemon": {
        "logo": "/images/pokemon/pokelogo3.png",
        "mainlogo": "/images/pokemon/mainlogo.png",
        "divCol": "#383838",
        "bgc": "#ef0e3d",
        "divEffect": "poke-flourish"

    },
    "Star Wars": {
        "logo": "/images/starwars/lightsaber.png",
        "mainlogo": "/images/starwars/mainlogo.png",
        "divLogo": "/images/starwars/deathstar2.png",
        "divCol": "#383838",
        "bgc": "Black",
        "divEffect": "star-flourish"
    }
}

function App() {
    const [theme, setTheme] = useState(data["Pokemon"])
    const [switchOn, setSwitchOn] = useState(false)

    const clickHandler = () => {
        if (switchOn){
            setTheme(data["Pokemon"])
            setSwitchOn(false)
        }
        else {
            setTheme(data["Star Wars"])
            setSwitchOn(true)
        }
    }

  return (
    <div className="App">
        <NavBar theme={theme}/>
        <DivisionLine theme={theme}/>
        {/* To add - Add score counters now*/}
        {/* Add grid/container that holds all the cards.*/}
        {/* Refine themes */}
        <button onClick={clickHandler}>Click me</button>
    </div>
  );
}

export default App;
