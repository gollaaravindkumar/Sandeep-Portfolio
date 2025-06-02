import React from "react";
import AboutImg from "../../assets/about.jpg";
import Info from "./Info";
import file from "../../assets/files.svg";
import "./About.css";
import resume from "../../assets/Sandeep__Resume.pdf";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My INtroduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />

        <div className="about__data">
          <Info />

          <p className="about__description">
            I build responsive and visually appealing web pages with a focus on
            UI/UX. As a passionate learner, 
            I’ve worked on multiple personal and
            academic projects that reflect my skills and attention to detail.
          </p>

          <a download="" href={resume} className="button button--flex">
            Download CV
            <img
              src={file}
              alt=""
              style={{
                marginLeft: "8px",
                width: "30px",
                height: "30px",
                filter: "invert(100%)", // makes dark icons look white
              }}
              className="button__icon"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
