import React from "react";
import "./Home.css";



interface Props {
  Text: string
}
export default function Home () {

  return (
    <main>
        <section className="EACbut">
          <button className="draw">EAC</button>
        </section> 
        <div>
          <video id="blur" autoPlay loop muted  width="100%" height= "auto">
            <source
              src={require("../../docs/EAC.mp4")}
              type="video/mp4"
            />
          </video>
        </div>
        <section className="Scheduler">
          <button className="draw2">Scheduler</button>
        </section>        
        <div>
          <video id="blur" autoPlay loop muted  width="100%" height= "auto">
            <source
              src={require("../../docs/Scheduler.mp4")}
              type="video/mp4"
            />
          </video>
        </div>
        <section className="WikiMaps">
          <button className="draw3">WikiMaps</button>
        </section>    
        <div>
          <video id="blur" autoPlay loop muted  width="100%" height= "auto">
            <source
              src={require("../../docs/Scheduler.mp4")}
              type="video/mp4"
            />
          </video>
        </div>
    </main>
  )
}