import React from "react"
import styles from "./score.module.css"

function Score(props) {
  return (
    <div className={styles.cont}>
      <div style={{ backgroundColor: props.theme.currentColor }}>
        Current Score: {props.currentScore}
      </div>
      <div style={{ backgroundColor: props.theme.highColor }}>
        Best Score: {props.highScore}
      </div>
    </div>
  )
}

export default Score
