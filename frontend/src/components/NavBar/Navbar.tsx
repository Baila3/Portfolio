import React from "react";
import "./Navbar.css";
import Dropdown from 'muicss/lib/react/dropdown';
import DropdownItem from 'muicss/lib/react/dropdown-item';


interface Props {
  Text: string
}
export default function Navbar () {
  const menuItemStyle = {
    backgroundColor: 'grey',
    color: 'black',
    borderRadius: '5px',
    transition: '150ms ease-in-out',
    '&:hover': {
      backgroundColor: '#black',
      color: 'grey'
    }
  };
  return (
    <main>
      <div className="nav-div">
        <img className="NavMage" src={require('../../docs/Screen Shot 2022-08-14 at 3.54.46 PM.png')} alt="" width = "100" height = "auto"/>
        <div className="options">
        <Dropdown  color="primary" label="Apps">
          <DropdownItem className="Links" link="/EAC">EAC</DropdownItem>
          <DropdownItem className="Links" link="/Scheduler">Scheduler</DropdownItem>
          <DropdownItem className="Links" link="/WikiMaps">WikiMaps</DropdownItem>
        </Dropdown>
          <h4>About</h4>
        </div>
      </div>
    </main>
  )
}