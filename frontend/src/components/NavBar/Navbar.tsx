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
        <img className="NavMage" src={require('../../docs/Logo.png')} alt="" width = "100" height = "auto"/>
        <div className="options">
          <h4>About</h4>
        </div>
      </div>
    </main>
  )
}