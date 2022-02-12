import React from "react";
import "./Contact.css";
import { Footer } from "../Footer/Footer";
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
              <img  alt ="Ashutosh Tripahthi" src="https://media-exp1.licdn.com/dms/image/C5635AQHgGlELq2Kniw/profile-framedphoto-shrink_400_400/0/1616426426486?e=1617613200&v=beta&t=V-l67Zme_1ErGLPMdvLLMildvxX3wzYn74er_EXl11o" />
            </div>

            <div className="div-1-bottom">
              <h3 className="div-1-name"> Ashutosh Tripathi </h3>
              <h5 className="div-1-position"> Founder </h5>
              <p className="div-1-story">
                {" "}
                with over 300k subscribers. After graduating with a degree in
                Mathematics from the University of Pennsylvania in May 2016, he
                decided to learn programming and to enroll in Fullstack Academy,
                an immersive coding bootcamp in New York City. While there, he
                fell in love with full-stack development and algorithm analysis.
                Upon completion of the program, he dove deeper into the field of
                algorithms and aced the Google interviews. The frustration that
                he felt during his interview prep led him to creating
                AlgoExpert. He used AlgoExpert to prepare for the Facebook
                interviews; unsurprisingly, he aced them!{" "}
              </p>
            </div>
          </div>
          
          <div className="div-1">
            <div className="div-1-top">
              <img  alt ="Nitesh Gupta" src="https://media-exp1.licdn.com/dms/image/C5603AQHbE-Z6HCjF2g/profile-displayphoto-shrink_400_400/0/1616784106774?e=1623283200&v=beta&t=pEnF1uZRb9f4bwyU6_BroXS52lB6KcEIHp5kwOL1bns" />
            </div>

            <div className="div-1-bottom">
              <h3 className="div-1-name"> NItesh Gupta</h3>
              <h5 className="div-1-position"> Co-Founder </h5>
              <p className="div-1-story">
                {" "}
                with over 300k subscribers. After graduating with a degree in
                Mathematics from the University of Pennsylvania in May 2016, he
                decided to learn programming and to enroll in Fullstack Academy,
                an immersive coding bootcamp in New York City. While there, he
                fell in love with full-stack development and algorithm analysis.
                Upon completion of the program, he dove deeper into the field of
                algorithms and aced the Google interviews. The frustration that
                he felt during his interview prep led him to creating
                AlgoExpert. He used AlgoExpert to prepare for the Facebook
                interviews; unsurprisingly, he aced them!{" "}
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



