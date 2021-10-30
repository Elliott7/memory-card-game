import React from "react"
import styles from "./navbar.module.css"

function NavBar(props) {
  const changeHandler = (e) => {
    props.changeTheme(e.target.value)
  }

  return (
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
          <option value="Star Wars">Star Wars - Easy</option>
          <option value="LOTR">Lord of the Rings - Medium</option>
          <option value="Rick and Morty">Rick and Morty - Hard</option>
          <option value="Pokemon">Pokemon - Intense</option>
          <option value="Cows">Cows - Insane</option>
        </select>
      </div>
    </header>
  )
}

export default NavBar
