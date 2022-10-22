import React, { useState } from "react";
import "./Navbar.css";


interface Props {
  Text: string
}
export default function Navbar () {
  const [logo, setLogo] = useState("Logo.png")
  const [nav, setNav] = useState("NavMage")
  const [links, setLinks] = useState("EAC")
  const changeLogo = () => {
    if (window.scrollY > 900) {
      setLogo("Logo2.png")
    } else {
      setLogo("Logo.png")
    }
    if (window.scrollY > 1800) {
      setLogo("Logo3.png")
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
  const changeLinks = () => {
    if (window.scrollY > 900 ) {
       setLinks("eacPos")
    } else {
      setLinks("EAC")
    }
    if (window.scrollY > 1800) {
       setLinks("schedulerPos")
    } 
     
  }
 
  window.addEventListener('scroll', changeLogo)
  window.addEventListener('scroll', changeNav)
  window.addEventListener('scroll', changeLinks)


  return (
    <main>
      <div className="nav-div">
        <img className={nav} src={require(`../../docs/${logo}`)} alt="" width = "85" height = "auto"/>
        <div className="options">
          <h2><a className={links} href="/EAC">EAC</a></h2>
          <h2><a className={links} href="/Wikimaps">Wikimaps</a></h2>
          <h2><a className={links} href="/Scheduler">Scheduler</a></h2>
          <h2><a className={links} href="/Abouts">About</a></h2>
        </div>
      </div>
    </main>
  )
}
