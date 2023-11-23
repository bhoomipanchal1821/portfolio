import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import homemainimg from "../../images/home.gif";
import Modal from "../Modal/Modal";

class Home extends Component {
  state = { showModal: false };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showModal: true });
    }, 1000);
  }

  ExitModal = () => {
    this.setState({ showModal: false });
  };
  render() {
    return (
      <div>
        {this.state.showModal && <Modal ExitModal={this.ExitModal} />}
        <div className="container-fluid d-flex justify-content-center flex-column">
          <div className="text-center ">
            <h1 className="display-3 fw-bolder mt-5 text-light fst-normal">
              Welcome to my portfolio!
            </h1>
            <div className="fs-4 text-light mt-5 fst-normal">
              This is Bhoomi Panchal, React.dev
            </div>
            <div class="container-fluid mt-5">
        <div class="row text-center button">
            <div class="col-6 offset-3">
            <Link to="/about">
                      <button className="btn btn-lg btn-light rounded-5  fst-normal border-0 ">
                        know more about me
                      </button>
                    </Link>
                    <Link to="/contact">
                      <button className="btn btn-lg btn-info ms-2 rounded-5 text-light fst-normal">
                        connect with me
                      </button>
                    </Link>
               
                </div>
            </div>
        </div>
    
            
          </div>
          <img
            src={homemainimg}
            alt="homeimage"
            className="bg-image  w-25 mx-auto "
          />
        </div>
        
      </div>
    );
  }
}
export default Home;
