import React from "react";
import "./Navbar.css";
import Dropdown from 'react-bootstrap/Dropdown';


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
          <h2>WikiMaps</h2>
          <h2>Scheduler</h2>
          <h2>About</h2>
        </div>
      </div>
    </main>
  )
}