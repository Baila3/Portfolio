import React, { useState } from "react";
import "./Navbar.css";


interface Props {
  Text: string
}
export default function Navbar () {
  const [logo, setLogo] = useState(0)
  const changeLogo = () => {
    if (window.scrollY > 900) {
      setLogo(1)
    } else {
      setLogo(0)
    }
  }
  window.addEventListener('scroll', changeLogo)
  return (
    <main>
      <div className="nav-div">
        <img className="NavMage" src={logo ? require('../../docs/Logo2.png') : require('../../docs/Logo.png')} alt="" width = "85" height = "auto"/>
        <div className="options">
          <h2 className="EAC">EAC</h2>
          <h2 className="WikiMaps">WikiMaps</h2>
          <h2 className="Scheduler">Scheduler</h2>
          <h2 className="About">About</h2>
        </div>
      </div>
    </main>
  )
}