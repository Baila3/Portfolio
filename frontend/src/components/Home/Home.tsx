import React from "react";
import "./Home.css";



interface Props {
  Text: string
}
export default function Home () {

  return (
    <main>
        <section className="buttons">
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
    </main>
  )
}