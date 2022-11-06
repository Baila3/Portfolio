import React, {FC} from "react";
import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


interface Props {
  Text: string
}
const Home: FC = () => {

  return (
    <main>
       <div>
        <section>
          <p className="Porto">This is my personal collection of projects I have worked on during my tech journey</p>
          <img className="blackSand" src={require("../../docs/flip.png")} alt="" width="100%" height="auto" />
        </section> 
       </div>
        <section className="EAC">
          <p className="drew">Everyone's a Critic (EAC) is a movie library that enables users to discover, rate, review and add to movies to personalized movie playlists. </p>
          <button type="button"    
            onClick={(e) => {
              e.preventDefault();
              window.open('https://github.com/Baila3/final-project');
            }} 
            className="draw">
            <FontAwesomeIcon icon={faGithub}  />
            Learn More
          </button>
        </section> 
        <div className="EACbor">
          <video id="blur1" autoPlay loop muted  width="99%" height= "auto">
            <source
              src={require("../../docs/EAC.mp4")}
              type="video/mp4"
            />
          </video>
        </div>
        <section>
          <p className="drew2">Scheduler is an app that allows its users to book an interview on any given day and choose an interviewer for that day! </p>
          <button type="button"
           onClick={(e) => {
              e.preventDefault();
              window.open('https://github.com/Baila3/scheduler');
            }} 
           className="draw2">
           <FontAwesomeIcon icon={faGithub}  />
           Learn More</button>
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
          <p className="drew3">WikiMaps is a small app which allows the user to view, create, edit or delete a map. </p>
          <button type="button"
           onClick={(e) => {
              e.preventDefault();
              window.open('https://github.com/Baila3/Wiki-Map');
            }} 
           className="draw3">
           <FontAwesomeIcon icon={faGithub}  />
           Learn More</button>
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

export default Home