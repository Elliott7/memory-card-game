import React, { useState, useEffect } from "react"
import styles from "./Game.module.css"

function Game(props) {
  const [playingCards, setPlayingCards] = useState([])
  const [tally, setTally] = useState([0])
  const [reset, setReset] = useState(true)

  // const randomize = (arr) => {
  //   return arr.sort(() => Math.random() - 0.5)
  // }

  const randomize = (arr) => {
    let myArr = arr
    let i = myArr.length - 1
    for (i; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = myArr[i]
      myArr[i] = myArr[j]
      myArr[j] = temp
    }
    return myArr
  }

  function hasDuplicates(array) {
    return new Set(array).size !== array.length
  }

  const handleClick = (e) => {
    setTally((prevState) => [...prevState, e.target.id])
    setPlayingCards(createCards)
  }

  function createCards() {
    return randomize(
      props.cards.map((card) => {
        return (
          <figure
            className={styles.card}
            onClick={handleClick}
            id={card.id}
            key={card.id}
          >
            <div> </div>
            <img
              src={card.url}
              id={card.id}
              alt={`Card - Picture of ${card.name}`}
            />
            <figcaption id={card.id}>{card.name}</figcaption>
          </figure>
        )
      })
    )
  }

  //Logic for updating the score and checking whether there are any duplicates
  useEffect(() => {
    if (hasDuplicates(tally)) {
      props.resetCurrent()
      setTally([])
      setReset(true)
      props.incorrectAnswer()
    } else if (reset) {
      setReset(false)
    } else {
      props.incCurrent()
    }
  }, [tally])

  // Changes the cards and reset the score each time the theme is changed
  useEffect(() => {
    props.resetCurrent()
    setPlayingCards(createCards)
    setTally([])
    setReset(true)
  }, [props.theme])

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${props.theme.bgMainImg})` }}
    >
      {playingCards}
    </div>
  )
}

export default Game
