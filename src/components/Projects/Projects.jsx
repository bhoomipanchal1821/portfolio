import React from "react";
import "./Projects.css";
import name_it from "../../images/proj1.png";
import flash_type from "../../images/proj2.png";
import pokedex from "../../images/proj3.png";
import portfolio from "../../images/proj4.png";
import portfolio_img from "../../images/projects.gif";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <div>
      <div className="conatiner ">
        <div className=" d-flex justify-content-center flex-column ">
          <div className="display-5 mt-5 text-center">My Projects</div>
          <div className="fs-4 mt-3 text-center">
            Here are a few cool things I've worked on, do check them out!
          </div>
        </div>
      </div>
      <div className="conatiner mt-5">
        <div className="row w-75 d-flex mx-auto">
          <div className="col">
            <div class="card border-0 bg-white shadow">
              <img
                src={name_it}
                class="card-img-top w-50 mx-auto mt-5"
                alt="Fissure in Sandstone"
              />
              <div class="card-body">
                <h5 class="card-title text-center mt-3 fs-2 fw-bold">
                  Name It!
                </h5>
                <p class="card-text text-secondary mt-3 ">
                  Do you find it difficult to name your projects or ventures?
                  Fear not! Check out this cool name suggestion application
                  which will help you find the best name for your next project,
                  venture, or startup. Keep building!
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card border-0 bg-white shadow">
              <img
                src={flash_type}
                class="card-img-top w-50 mx-auto mt-5"
                alt="Fissure in Sandstone"
              />
              <div class="card-body">
                <h5 class="card-title text-center mt-3 fs-2 fw-bold">
                  FlashType!
                </h5>
                <p class="card-text text-secondary mt-3">
                  Pokemon was a huge part of our childhood, wasn't it? Talking
                  about pokemon brings back so many memories, but do you
                  remember the details of each pokemon? Probably No! So here I
                  bring you a pokedex to check all pokemons :)
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card border-0 bg-white shadow">
              <img
                src={pokedex}
                class="card-img-top w-50 mx-auto mt-5"
                alt="Fissure in Sandstone"
              />
              <div class="card-body">
                <h5 class="card-title text-center mt-3 fs-2 fw-bold">
                  Pokedex!
                </h5>
                <p class="card-text text-secondary mt-3">
                  Having a good typing speed will always help you as a
                  developer! Here, I present you the typing speed test
                  application, where you can check your typing speed (in wpm)
                  and share the results with your friends too.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="conatiner mt-5">
        <div className="row w-100 d-flex justify-content-center">
          <div className=" w-25 portfolio ms-4">
            <div class="card border-0 bg-white shadow">
              <img
                src={portfolio}
                class="card-img-top w-50 mx-auto mt-5"
                alt="Fissure in Sandstone"
              />
              <div class="card-body">
                <h5 class="card-title text-center mt-3 fs-2 fw-bold">
                  Portfolio Website!
                </h5>

                <p class="card-text text-secondary mt-3 ">
                  As a developer/designer, you should definitely have your own
                  portfolio website. There are endless benefits. But, a lot of
                  people feel that it would be tough to make one. So here I
                  bring you a tutorial to make your own website.
                </p>
              </div>
            </div>
          </div>
          <div className="w-50 ms-1">
            <img src={portfolio_img} className="d-flex justify-content-center image" />
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5 fs-4 fw-bold">
          Check out
          <Link to="/skills" className="text-dark ms-1">
            my skills
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
