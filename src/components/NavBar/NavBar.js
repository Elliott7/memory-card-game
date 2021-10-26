import React from "react";
import styles from "./navbar.module.css"

function NavBar(props){
    return(
        <header style={{backgroundColor: `${props.theme.bgc}`}}>

            <div>
                <img src={`${props.theme.logo}`} alt="Logo" className={styles.logo}/>
            </div>

            <div className={styles.mainlogoCont}>
                <img src={`${props.theme.mainlogo}`} alt="Logo-Name" className={styles.logo}/>
            </div>

            <div>Drop down select box (props.something)</div>
        </header>
    )
}

export default NavBar