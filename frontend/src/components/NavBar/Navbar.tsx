import React from "react";
import "./Navbar.css";


interface Props {
  Text: string
}
export default function Navbar () {

  return (
    <main>
      <div className="nav-div">
        <img className="NavMage" src={require('../../docs/Logo.png')} alt="" width = "85" height = "auto"/>
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