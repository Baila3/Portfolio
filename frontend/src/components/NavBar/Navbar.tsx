import React, { useState } from "react";
import "./Navbar.css";


interface Props {
  Text: string
}
export default function Navbar () {
  const [logo, setLogo] = useState(0)
  const [nav, setNav] = useState(0)
  const changeLogo = () => {
    if (window.scrollY > 900) {
      setLogo(1)
    } else {
      setLogo(0)
    }
  }
  const changeNav = () => {
    if (window.scrollY > 900 && window.scrollY < 1800  ) {
      setNav(1)
    } else if (window.scrollY > 1800) {
      setNav(2)
    } else {
      setNav(0)
    }
  }
  window.addEventListener('scroll', changeLogo)
  window.addEventListener('scroll', changeNav)
  return (
    <main>
      <div className="nav-div">
        <img className={nav ?  "navPos1" : "NavMage"} src={logo ? require('../../docs/Logo2.png') : require('../../docs/Logo.png')} alt="" width = "85" height = "auto"/>
        <div className="options">
          <h2 className={nav ? "eacPos" : "EAC" }>EAC</h2>
          <h2 className={nav ?  "eacPos" : "WikiMaps" }>WikiMaps</h2>
          <h2 className={nav ?  "eacPos" : "Scheduler" }>Scheduler</h2>
          <h2 className={nav ?  "eacPos" : "About" }>About</h2>
        </div>
      </div>
    </main>
  )
}
