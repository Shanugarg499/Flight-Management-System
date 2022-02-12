import React from "react";
import "./Contact.css";
import { Footer } from "../Footer/Footer";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
              <img  alt ="Shanu Garg" src="https://media-exp1.licdn.com/dms/image/C4E03AQFH1nmm7Yc8Sg/profile-displayphoto-shrink_400_400/0/1615449033001?e=1649894400&v=beta&t=_GYoz33yqTE5b-j-kDzWyB-O9Fq0fRNLFBLG-1E_IZg" />
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
              <img  alt ="Nitesh Gupta" src="https://media-exp1.licdn.com/dms/image/C5603AQH09_NphFSy3w/profile-displayphoto-shrink_400_400/0/1641558474761?e=1649894400&v=beta&t=u9Q6-DyMc_H__fY1Sk8HCnm6QUohCXFyw4ihW9dRRkQ" />
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



