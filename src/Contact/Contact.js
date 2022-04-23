import React from "react";
import "./Contact.css";
import { Footer } from "../Footer/Footer";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import nitesh from "../Images/niteshgupta.jpg";
import shanu from "../Images/shanugarg.jpg";
function Contact() {
  return (
    <div className="about-body">
      <div className="about-top">
        <div className="meet-team">
          <h1 className="about-h1">
            <strong> Meet the Team </strong>
          </h1>
        </div>

        <div className="about-wrapper">
          <div className="div-1">
            <div className="div-1-top">
              <img  alt ="Shanu Garg" src={shanu} />
            </div>

            <div className="div-1-bottom">
              <h3 className="div-1-name"> Shanu Garg <a href="https://www.linkedin.com/in/shanu-garg-a46672190/" target="_blank"><LinkedInIcon /></a></h3>
               <a href="https://www.linkedin.com/in/shanu-garg-a46672190/" target="_blank" />
              <h5 className="div-1-position"> {"Founder & CEO"} </h5>
              <p className="div-1-story">
                Hi, I'm Shanu Garg, engineer, an investor, youtuber, chess player with 1800+ rating, completing my graduation in 2022 @ NIT Delhi and join Analog Devices as an Software Engineer.
              </p>
            </div>
          </div>
          
          <div className="div-1">
            <div className="div-1-top">
              <img  alt ="Nitesh Gupta" src={nitesh} />
            </div>

            <div className="div-1-bottom">
              <h3 className="div-1-name"> Nitesh Gupta <a href="https://www.linkedin.com/in/nitesh-gupta-37868b193/" target="_blank"><LinkedInIcon /></a></h3>
              <h5 className="div-1-position"> {"Founder & CEO"} </h5> 
              <p className="div-1-story">
              Hello, I am Nitesh Gupta, and I will complete my B-Tech degree from the National Institute of Technology Delhi in 2022 and will work @ Bombinate Technologies (Koo App product specific) for SDE role.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;



