import React, { useState } from "react";
import "./Navbar.css";


interface Props {
  Text: string
}
export default function Navbar () {
  const [logo, setLogo] = useState(0)
  const [nav, setNav] = useState("NavMage")
  const changeLogo = () => {
    if (window.scrollY > 900) {
      setLogo(1)
    } else {
      setLogo(0)
    }
  }
  const changeNav = () => {
    if (window.scrollY > 900 ) {
       setNav("navPos1")
    } else {
      setNav("NavMage")
    }
    if (window.scrollY > 1800) {
       setNav("navPos2")
    } 
     
  }
 
  window.addEventListener('scroll', changeLogo)
  window.addEventListener('scroll', changeNav)

  return (
    <main>
      <div className="nav-div">
        <img className={nav} src={logo ? require('../../docs/Logo.png') : require('../../docs/Logo.png')} alt="" width = "85" height = "auto"/>
        <div className="options">
          <h2><a className={nav ? "eacPos" : "EAC" } href="/EAC">EAC</a></h2>
          <h2><a className={nav ?  "eacPos" : "WikiMaps" } href="/Wikimaps">Wikimaps</a></h2>
          <h2><a className={nav ?  "eacPos" : "Scheduler" } href="/Scheduler">Scheduler</a></h2>
          <h2><a className={nav ?  "eacPos" : "About" } href="/Abouts">About</a></h2>
        </div>
      </div>
    </main>
  )
}
