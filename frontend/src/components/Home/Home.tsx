import React from "react";
import "./Home.css";



interface Props {
  Text: string
}
export default function Home () {

  return (
    <main>
        <img src={require("../../docs/Smart-Buildings-1.jpeg")} alt="" width="100%" height="auto"/>
        <section className="EAC">
          <p className="drew">Everyone's a Critic (EAC) is a movie library that enables users to discover, rate, review and add to movies to personalized movie playlists. </p>
          <button className="draw">Learn More</button>
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
          <p className="drew2">Scheduler is an app that allows its users to book an interview on any given day and choose an interviewer for that day! </p>
          <button className="draw2">Learn More</button>
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
          <p className="drew3">WikiMaps is a small app which allows the user to view, create, edit or delete a map. Wikimaps relies on the google map api to render maps for the user and allows them to save custom versions of these maps with unique markers.</p>
          <button className="draw3">Learn More</button>
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