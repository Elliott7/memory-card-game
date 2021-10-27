import React from "react"
import styles from "./navbar.module.css"
import * as url from "url"

function NavBar(props) {
  const changeHandler = (e) => {
    props.changeTheme(e.target.value)
  }

  return (
    // <header style={{ backgroundColor: `${props.theme.bgc}` }}>
    <header
      style={
        props.theme.bgHeadImage
          ? { backgroundImage: `url(${props.theme.bgHeadImage})` }
          : { backgroundColor: `${props.theme.bgc}` }
      }
    >
      <div>
        <img src={`${props.theme.logo}`} alt="Logo" className={styles.logo} />
      </div>

      <div className={styles.mainlogoCont}>
        <img
          src={`${props.theme.mainlogo}`}
          alt="Logo-Name"
          className={styles.logo}
        />
      </div>

      <div>
        <select
          name="themeChoice"
          id="themeChoice"
          style={{ color: `${props.theme.bgc}` }}
          className={styles.selection}
          onChange={changeHandler}
        >
          <option value="Pokemon">Pokemon</option>
          <option value="Star Wars">Star Wars</option>
          <option value="Rick and Morty">Rick and Morty</option>
          <option value="LOTR">Lord of the Rings</option>
          <option value="Cows">Cows</option>
        </select>
      </div>
    </header>
  )
}

export default NavBar
