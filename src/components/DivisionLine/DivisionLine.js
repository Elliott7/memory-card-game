import React, { useEffect } from "react"
import "./DivisionLine.css"

function DivisionLine(props) {
  let divLine = () => {
    switch (props.theme.divEffect) {
      case "poke-flourish":
        return <div className={"poke-flourish"}> </div>
      case "star-flourish":
        return (
          <div className={"star-flourish"}>
            <img src={`${props.theme.divLogo}`} alt="" />
          </div>
        )
    }
  }

  return (
    <div className="divLine">
      <hr style={{ border: `15px solid ${props.theme.divCol}` }} />
      {divLine()}
    </div>
  )
}

export default DivisionLine
