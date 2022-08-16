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
        <img className="NavMage" src={require('../../docs/Screen Shot 2022-08-14 at 3.54.46 PM.png')} alt="" width = "100" height = "auto"/>
        <div className="options">
          {/* <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Apps
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/EAC">Action</Dropdown.Item>
              <Dropdown.Item href="/Scheduler">Another action</Dropdown.Item>
              <Dropdown.Item href="/WikiMaps">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
          <h4>About</h4>
        </div>
      </div>
    </main>
  )
}