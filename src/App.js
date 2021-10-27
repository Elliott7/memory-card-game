import "./App.css"
import NavBar from "./components/NavBar/NavBar"
import DivisionLine from "./components/DivisionLine/DivisionLine"
import React, { useState } from "react"
import Score from "./components/Score/Score"
import Game from "./components/Game/Game"

const data = {
  Pokemon: {
    name: "Pokemon",
    logo: "/images/pokemon/pokelogo3.png",
    mainlogo: "/images/pokemon/mainlogo.png",
    divCol: "#383838",
    bgc: "#ef0e3d",
    divEffect: "poke-flourish",
    currentColor: "#ffb5b5",
    highColor: "#b5ffb5",
    cards: [
      { url: "/images/pokemon/cards/Articuno.png", name: "Articuno", id: 1 },
      { url: "/images/pokemon/cards/Blastoise.png", name: "Blastoise", id: 2 },
      { url: "/images/pokemon/cards/Bulbasaur.png", name: "Bulbasaur", id: 3 },
      { url: "/images/pokemon/cards/Celebi.png", name: "Celebi", id: 4 },
      { url: "/images/pokemon/cards/Charizard.png", name: "Charizard", id: 5 },
      {
        url: "/images/pokemon/cards/Charmander.png",
        name: "Charmander",
        id: 6,
      },
      {
        url: "/images/pokemon/cards/Charmeleon.png",
        name: "Charmeleon",
        id: 7,
      },
      { url: "/images/pokemon/cards/Chikorita.png", name: "Chikorita", id: 8 },
      { url: "/images/pokemon/cards/Cyndaquil.png", name: "Cyndaquil", id: 9 },
      { url: "/images/pokemon/cards/Entei.png", name: "Entei", id: 10 },
      { url: "/images/pokemon/cards/Groudon.png", name: "Groudon", id: 11 },
      { url: "/images/pokemon/cards/Gyarados.png", name: "Gyarados", id: 12 },
      { url: "/images/pokemon/cards/Ivysaur.png", name: "Ivysaur", id: 13 },
      { url: "/images/pokemon/cards/Kyogre.png", name: "Kyogre", id: 14 },
      { url: "/images/pokemon/cards/Lapras.png", name: "Lapras", id: 15 },
      { url: "/images/pokemon/cards/Latias.png", name: "Latias", id: 16 },
      { url: "/images/pokemon/cards/Latios.png", name: "Latios", id: 17 },
      { url: "/images/pokemon/cards/Lugia.png", name: "Lugia", id: 18 },
      { url: "/images/pokemon/cards/Magmar.png", name: "Magmar", id: 19 },
      { url: "/images/pokemon/cards/Mew.png", name: "Mew", id: 20 },
      { url: "/images/pokemon/cards/MewTwo.png", name: "MewTwo", id: 21 },
      { url: "/images/pokemon/cards/Moltres.png", name: "Moltres", id: 22 },
      { url: "/images/pokemon/cards/Rayquaza.png", name: "Rayquaza", id: 23 },
      { url: "/images/pokemon/cards/Scyther.png", name: "Scyther", id: 24 },
      { url: "/images/pokemon/cards/Squirtle.png", name: "Squirtle", id: 25 },
      { url: "/images/pokemon/cards/Suicune.png", name: "Suicune", id: 26 },
      { url: "/images/pokemon/cards/Totodile.png", name: "Totodile", id: 27 },
      { url: "/images/pokemon/cards/Tyranitar.png", name: "Tyranitar", id: 28 },
      { url: "/images/pokemon/cards/Venusaur.png", name: "Venusaur", id: 29 },
      { url: "/images/pokemon/cards/Wartortle.png", name: "Wartortle", id: 30 },
      { url: "/images/pokemon/cards/Zapdos.png", name: "Zapdos", id: 31 },
    ],
  },
  "Star Wars": {
    name: "Star Wars",
    logo: "/images/starwars/lightsaber.png",
    mainlogo: "/images/starwars/mainlogo.png",
    divLogo: "/images/starwars/deathstar2.png",
    divCol: "#383838",
    bgc: "Black",
    divEffect: "star-flourish",
    currentColor: "rgba(218,0,255,0.6)",
    highColor: "rgba(0,252,253,0.6)",
    cards: [
      { url: "/images/starwars/cards/bb8.png", name: "BB-8", id: 1 },
      { url: "/images/starwars/cards/c3po.png", name: "C3PO", id: 2 },
      { url: "/images/starwars/cards/chewbacca.png", name: "Chewbacca", id: 3 },
      { url: "/images/starwars/cards/leia.png", name: "Leia", id: 4 },
      { url: "/images/starwars/cards/obiwan.png", name: "Obi-Wan", id: 5 },
      { url: "/images/starwars/cards/r2d2.png", name: "R2D2", id: 6 },
      { url: "/images/starwars/cards/ren.png", name: "Kylo-Ren", id: 7 },
      {
        url: "/images/starwars/cards/stormtrooper.png",
        name: "Stormtrooper",
        id: 8,
      },
    ],
  },
  LOTR: {
    name: "LOTR",
    logo: "/images/lotr/lotr1.png",
    mainlogo: "/images/lotr/title.png",
    divLogo: "/images/lotr/lotr4.png",
    bgHeadImage: "/images/lotr/bg.jpg",
    divCol: "#383838",
    bgc: "#80530e",
    divEffect: "star-flourish",
    currentColor: "#ffb5b5",
    highColor: "#b5ffb5",
  },
}

function App() {
  const [theme, setTheme] = useState(data["Pokemon"])
  const [currentScore, setCurrentScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  const changeTheme = (newSelection) => {
    if (theme.name !== newSelection) {
      setTheme(data[newSelection])
    }
  }

  return (
    <div className="App">
      <NavBar theme={theme} changeTheme={changeTheme} />
      <DivisionLine theme={theme} />
      <Score theme={theme} currentScore={currentScore} highScore={highScore} />
      <Game cards={theme.cards} theme={theme} />
    </div>
  )
}

export default App
