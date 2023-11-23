import React from "react";
import "./Contact.css";
import git from "../../images/git.gif";
import linkedin from "../../images/in.gif";
import insta from "../../images/insta.gif";
import contact from "../../images/contact_img.gif";
import contact_anime from "../../images/contact_anime.png";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div className="contact">
      <div className="conatiner ">
        <div className=" d-flex justify-content-center flex-column ">
          <div className="display-5  mt-5 text-center">Get in touch</div>
        </div>
        <div className="fs-4 mt-3 text-center">
          Feel free to drop me an email.
        </div>
        <form className="w-50 d-flex mx-auto flex-column mt-5">
          <div className=" mb-4 ">
            <input
              type="email"
              id="form4Example1"
              className="form-control shadow form-control-lg fs-6 p-3 "
              placeholder="Your Email ID"
            />
          </div>
          <div className=" mb-4">
            <textarea
              className="form-control p-3 fs-6 shadow"
              id="form4Example3"
              rows="10"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div class="d-grid gap-2">
            <button class="btn btn-lg fs-6 text-light p-3   " type="button">
              Send Email
            </button>
          </div>
        </form>
        <div className="w-50 d-flex mx-auto flex-column mt-5">
          <div className="conatiner">
            <div className="row contact">
              <div className="col ">
                <a href="https://github.com/bhoomipanchal1821">
                  <img src={git} className="w-25 border-bottom" />
                </a>
              </div>
              <div className="col">
                <a href="https://www.linkedin.com/in/bhoomi-panchal-b671b3243/">
                  <img src={linkedin} className="w-25 border-bottom" />
                </a>
              </div>
              <div className="col">
                <a href="https://github.com/bhoomipanchal1821">
                  <img src={insta} className="w-25 border-bottom" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <img src={contact} className=" position-absolute top-0 end-0" />
          <img src={contact_anime} className="position-absolute bottom-0 "/>
        </div>
        <div className="d-flex justify-content-center mt-5 fs-4 fw-bold">
          Read more
          <Link to="/about" className="text-dark ms-1">
            about me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
