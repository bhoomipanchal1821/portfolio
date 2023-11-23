import React from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom";
import homewhiteicon from "../../images/home_white.png";
import homeblackicon from "../../images/home_black.png";
import "./GoHome.css";
// this component is only there to teach you programatic navigation
// it could have be dobne easily just by using link component
//  but i have use the history object to teach programmaic navigation
class GoHome extends Component {
  // progarmatically navigate if you are on skill page nd you click on homebutton direct homebutton take to you on home page '/'
  navigateToHome = () => {
    const { history } = this.props;
    history.push("/");
  };
  render() {
    const { location } = this.props;
    const whiteBtn = location.pathname === "/";
    return (
      <div>
        <button className={`go-home-btn ${
                whiteBtn ? 'white-bkg' :'gradient-bkg '
            }`} onClick={this.navigateToHome}>
          <img
            className="home-icon"
            src={whiteBtn ? homeblackicon : homewhiteicon}
             alt="home-icon"
          />
        </button>
      </div>
    );
  }
}

export default withRouter(GoHome);
