import React, { useState } from "react";
import "./Navbar.css";


// interface Props {
//   Text: string
// }
export default function Navbar () {
  const [logo, setLogo] = useState("Logo.png")
  const [nav, setNav] = useState("NavMage")
  const [links, setLinks] = useState("star")
  const changeLogo = () => {
    if (window.scrollY > 900) {
      setLogo("Logo2.png")
    } else {
      setLogo("Logo.png")
    }
    if (window.scrollY > 1800) {
      setLogo("Logo3.png")
    }
    if (window.scrollY > 2700) {
      setLogo("Logo4.png")
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
    if (window.scrollY > 2700) {
      setNav("navPos3")
   } 
     
  }
  const changeLinks = () => {
    if (window.scrollY > 900 ) {
       setLinks("eacPos")
    } else {
      setLinks("About")
    }
    if (window.scrollY > 1800) {
       setLinks("schedulerPos")
    } 
    if (window.scrollY > 2700) {
      setLinks("wikimapsPos")
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
          <h2><a className={links}  target="_blank" rel="noopener noreferrer" href="https://github.com/Baila3/final-project">EAC</a></h2>
          <h2><a className={links} target="_blank" rel="noopener noreferrer" href="https://github.com/Baila3/Wiki-Map">Wikimaps</a></h2>
          <h2><a className={links} target="_blank" rel="noopener noreferrer" href="https://github.com/Baila3/scheduler">Scheduler</a></h2>
          <h2><a className={links} href="/Abouts">About</a></h2>
        </div>
      </div>
    </main>
  )
}
