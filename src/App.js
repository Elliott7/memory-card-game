import "./App.css"
import NavBar from "./components/NavBar/NavBar"
import DivisionLine from "./components/DivisionLine/DivisionLine"
import React, { useState, useEffect } from "react"
import Score from "./components/Score/Score"
import Game from "./components/Game/Game"
import Data from "./data"

function App() {
  const data = Data
  const [theme, setTheme] = useState(data["Star Wars"])
  const [currentScore, setCurrentScore] = useState(0)
  const [highScore, setHighScore] = useState({
    "Star Wars": 0,
    Pokemon: 0,
    LOTR: 0,
    "Rick and Morty": 0,
    Cows: 0,
  })
  const [error, setError] = useState("transparent")

  function getStorageHS() {
    let highScore = localStorage.getItem("highScore")
    return JSON.parse(highScore)
  }

  function preloadImage(url) {
    const image = new Image()
    image.src = url
    return image
  }

  function preloadImages(dataObject) {
    let imageArray = []
    for (let key in dataObject) {
      const { cards, logo, mainlogo, bgMainImg, divLogo } = dataObject[key]
      const logos = [logo, mainlogo, bgMainImg, divLogo]
      logos.forEach((img) => imageArray.push(preloadImage(img)))

      for (let cardKey in cards) {
        imageArray.push(preloadImage(cards[cardKey].url))
      }
    }
    console.log(imageArray)
    return imageArray
  }

  useEffect(() => {
    preloadImages(data)
    let scoreHS = getStorageHS()
    if (scoreHS) {
      setHighScore(scoreHS)
    }
  }, [])

  const incorrectAnswer = () => {
    setError("#ffbaba")
    setTimeout(() => {
      setError("transparent")
    }, 600)
  }

  const changeTheme = (newSelection) => {
    if (theme.name !== newSelection) {
      setTheme(data[newSelection])
    }
  }

  const incHighScore = (val) => {
    setHighScore((prevState) => {
      if (prevState[theme.name] < val) {
        const updated = { ...prevState, [theme.name]: val }
        localStorage.setItem("highScore", JSON.stringify(updated))
        return updated
      }
      return { ...prevState }
    })
  }

  const incCurrentScore = () => {
    const current = currentScore + 1
    setCurrentScore(currentScore + 1)
    incHighScore(current)
  }
  const resetCurrentScore = () => {
    setCurrentScore(0)
  }

  return (
    <div className="App">
      <NavBar theme={theme} changeTheme={changeTheme} />
      <DivisionLine theme={theme} />
      <Score
        theme={theme}
        currentScore={currentScore}
        highScore={highScore[theme.name]}
        error={error}
      />
      <Game
        cards={theme.cards}
        theme={theme}
        incCurrent={incCurrentScore}
        resetCurrent={resetCurrentScore}
        incorrectAnswer={incorrectAnswer}
      />
    </div>
  )
}

export default App
