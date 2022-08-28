import React from "react";
import "./Home.css";



interface Props {
  Text: string
}
export default function Home () {

  return (
    <main>
        <section>
          <p className="drew">If you enjoy giving your takes on movies this is the perfect app for you. It really proves to you that Everyone's a Critic </p>
          <button className="draw">EAC</button>
        </section> 
        <div>
          <video id="blur1" autoPlay loop muted  width="99%" height= "auto">
            <source
              src={require("../../docs/EAC.mp4")}
              type="video/mp4"
            />
          </video>
        </div>
        <section>
          <button className="draw2">Scheduler</button>
        </section>        
        <div>
          <video id="blur2" autoPlay loop muted  width="99%" height= "auto">
            <source
              src={require("../../docs/Scheduler.mp4")}
              type="video/mp4"
            />
          </video>
        </div>
        <section>
          <button className="draw3">WikiMaps</button>
        </section>    
        <div>
          <video id="blur3" autoPlay loop muted  width="99%" height= "auto">
            <source
              src={require("../../docs/WikiMaps.mp4")}
              type="video/mp4"
            />
          </video>
        </div>
    </main>
  )
}