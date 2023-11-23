import React from "react";
import "./Skills.css";
import skill_img from "../../images/animation-lmq97ptq-unscreen.gif";
import html_img from "../../images/html.png";
import css_img from "../../images/css.png";
import react_img from "../../images/react.png";
import js_img from "../../images/js.png";
import bs_img from "../../images/bs.png";
import redux_img from "../../images/redux.png";
import router_img from "../../images/router.png";
import ts_img from "../../images/ts (1).png";
import skill_main from "../../images/skills_vector.png";
import { Link } from "react-router-dom";
const Skills = () => {
  return (
    <div className="skills">
      <div>
        <div className="conatiner w-100 ">
          <img src={skill_main} className="skill_main  " />
          <img src={skill_img} className="gif_img" />
          <div className=" d-flex justify-content-center flex-column ">
            <div className="display-5 mt-5 text-center">My Skills</div>

            <div className="fs-4 mt-3 text-center">
              Passionate about new technologies, I keep exploring stuff. Here's
              the tech stack I've worked with!
            </div>
          </div>
        </div>
        <div className="conatiner position-relative">
          <div className="row mt-5 ">
            <div className="col">
              <img src={html_img} className="w-25" />
              <div className="w-25 text-center">HTML</div>
            </div>

            <div className="col">
              <img src={css_img} className="w-25 css" />
              <div className="w-25 text-center">CSS</div>
            </div>

            <div className="col">
              <img src={react_img} className="w-25" />
              <div className="w-25 text-center">REACT</div>
            </div>
            <div className="col">
              <img src={js_img} className="w-25" />
              <div className="w-25 text-center">JS</div>
            </div>
          </div>
        </div>
        <div className="conatiner position-relative">
          <div className="row mt-5 ">
            <div className="col">
              <img src={bs_img} className="w-25 bs" />
              <div className="w-25 text-center">Bootstrap 3,4,5</div>
            </div>

            <div className="col">
              <img src={redux_img} className="w-25 redux" />
              <div className="w-25 text-center">Redux</div>
            </div>

            <div className="col">
              <img src={router_img} className="w-25 router" />
              <div className="w-25 text-center">Router</div>
            </div>
            <div className="col">
              <img src={ts_img} className="w-25" />
              <div className="w-25 text-center">Typscript</div>
            </div>
          </div>
        </div>
        <div className="position-absolute end-50 fs-4 fw-bold">Get in <Link to="/contact" className="text-dark">touch </Link></div>
      </div>
    </div>
  );
};

export default Skills;
