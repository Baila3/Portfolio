import React, {FC} from "react";
import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';



const Home: FC = () => {

  return (
    <main>
       <div>
        <section>
          <h1 className="Porto">Hi My name is Baila, and this is my portfolio! </h1>
          <img className="Baila" src={require("../../docs/BailaPic.png")} alt="" width="19%" height="auto"/>
          <img className="blackSand" src={require("../../docs/flip.png")} alt="" width="100%" height="auto" />
        </section> 
       </div>
        <section>
          <p className="EACDescription">Everyone's a Critic (EAC) is a movie library that enables users to discover, rate, review and add to movies to personalized movie playlists. </p>
          <button type="button"    
            onClick={(e) => {
              e.preventDefault();
              window.open('https://github.com/Baila3/final-project');
            }} 
            className="EACButton">
            <FontAwesomeIcon icon={faGithub}  />
            Learn More
          </button>
        </section> 
        <div>
          <video id="blurEAC" autoPlay loop muted  width="99%" height= "auto">
            <source
              src={require("../../docs/EAC.mp4")}
              type="video/mp4"
            />
          </video>
        </div>
        <section>
          <p className="SchedulerDescription">Scheduler is an app that allows its users to book an interview on any given day and choose an interviewer for that day! </p>
          <button type="button"
           onClick={(e) => {
              e.preventDefault();
              window.open('https://github.com/Baila3/scheduler');
            }} 
           className="SchedulerButton">
           <FontAwesomeIcon icon={faGithub}  />
           Learn More</button>
        </section>        
        <div>
          <video id="blurScheduler" autoPlay loop muted  width="99%" height= "auto">
            <source
              src={require("../../docs/Scheduler.mp4")}
              type="video/mp4"
            />
          </video>
        </div>
        <section>
          <p className="WikiMapsDescription">WikiMaps is a small app which allows the user to view, create, edit or delete a map. </p>
          <button type="button"
           onClick={(e) => {
              e.preventDefault();
              window.open('https://github.com/Baila3/Wiki-Map');
            }} 
           className="WikimapsButton">
           <FontAwesomeIcon icon={faGithub}  />
           Learn More</button>
        </section>    
        <div>
          <video id="blurWikimaps" autoPlay loop muted  width="99%" height= "auto">
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