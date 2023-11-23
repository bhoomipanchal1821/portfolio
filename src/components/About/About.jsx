import React from "react";
import "./About.css";

import { Link } from "react-router-dom";
import about_img from "../../images/about_vector.png";
import about_me from "../../images/animation-ln1jfxz8-unscreen.gif";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="d-flex justify-content-center flex-column">
          <h1 className="display-5 text-center mt-5">About Me</h1>
        </div>
        <div className="breadcrumb d-flex justify-content-center mt-3 fs-4">
          <li className="breadcrumb-item ">React.js</li>
          <li className="breadcrumb-item ">React Router</li>
          <li className="breadcrumb-item ">React Portal</li>
          <li className="breadcrumb-item ">HTML</li>
          <li className="breadcrumb-item">CSS</li>
          <li className="breadcrumb-item ">jQuery</li>
          <li className="breadcrumb-item">Javascript</li>
          <li className="breadcrumb-item ">Bootstrap 3,4,5</li>
          <li className="breadcrumb-item ">Responsive Design</li>
          <li className="breadcrumb-item ">Typescript </li>
        </div>
      </div>
      <div className="container-fluid">
        <div className="main-left">
          <img src={about_img} alt="about_background" className="abt_img " />

          <div className="text-overlay ms-5 mt-3">
            <div className="fs-3 fw-bold mt-5 ">Skills and Qualities:</div>

            <p className="text-breif fs-6 mt-5 ">
              <b className="fs-5 ">React.js:</b> React.js developer proficient in
              creating dynamic web applications with strong expertise in
              component-driven development and state management using Redux or
              Context API.
            </p>
            <p className="text-breif fs-6 mt-2">
              <b className="fs-5">HTML/CSS: </b>Proficiency in HTML for
              structuring web content and CSS for styling and layout.
            </p>
            <p class="text-breif fs-6 mt-2">
              <b className="fs-5">JavaScript: </b>Strong JavaScript skills for
              creating interactive and dynamic web experiences.
            </p>
            <p class="text-breif fs-6 mt-2">
              <b className="fs-5">Bootstrap 3,4,5:</b>Skilled in Bootstrap
              framework, adept at designing responsive and visually appealing
              web interfaces with proficiency in HTML, CSS, and JavaScript for
              seamless user experiences.
            </p>
            <p class="text-breif fs-6 mt-2">
              <b className="fs-5">Responsive Design: </b>Understanding of
              responsive web design principles and CSS frameworks like Bootstrap
            </p>
            <p class="text-breif fs-6 mt-2">
              <b className="fs-5">Frontend Frameworks: </b>Knowledge of popular
              frontend frameworks such as React, Angular, or Vue.js.
            </p>
            <p class="text-breif fs-6 mt-2">
              <b className="fs-5">Version Control: </b>Familiarity with Git and
              code repository management.
            </p>
            <p class="text-breif fs-6 mt-2">
              <b className="fs-5">Cross-Browser Compatibility: </b>Ability to
              write code that works consistently across different web browsers.
            </p>

            <p class="text-breif fs-6 mt-2">
              <b className="fs-5">Testing and Debugging:</b> Proficiency in
              debugging tools and testing methodologies.
            </p>
            <p class="text-breif fs-6 mt-2">
              <b className="fs-5">Problem Solving:</b> Strong problem-solving
              skills to troubleshoot and address frontend issues.
            </p>
            <p class="text-breif fs-6 mt-2">
              <b className="fs-5">Communication: </b>Effective communication
              with team members and stakeholders to understand project
              requirements and provide updates.
            </p>
            <p class="text-breif fs-6 mt-2">
              <b className="fs-5">Continuous Learning: </b>A willingness to stay
              updated with the latest frontend technologies and best practices.
            </p>
          </div>
        </div>
        <div className="main-right float-end ">
          <img src={about_me} alt="about_me" className="about_me_image " />
        </div>
        <div className="fs-3 fw-bold d-flex justify-content-center">
          Check out  
          <Link to="/projects" className="text-dark ">
            <div className="ms-1">my Projects!</div>
          </Link>
        </div>
      </div>
     
    </div>
  );
};

export default About;
