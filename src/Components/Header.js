import React, { Component } from "react";
import "./style.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNavIcons: false,
    };
  }

  toggleNav = () => {
    this.setState({
      showNavIcons: !this.state.showNavIcons,
    });
    console.log(this.state.showNavIcons);
  };

  // responsiveNav = () => {
  //   let nav = "navbar";

  //   if (!nav.className.includes("responsive")) {
  //     nav.className += " responsive";
  //   } else {
  //     nav.className = nav.className.replace(" responsive", " ");
  //   }
  // };

  render() {
    return (
      <div>
        <div className="comp-cat headers">
          <h1> Headers:</h1>

          <div className="navbar midnight" id="myNav">
            <div className="logo">
              <img src="logo192.png" alt="react logo" width="42" height="42" />
            </div>
            <div className="nav-links">
              {this.state.showNavIcons && (
                <React.Fragment>
                  <a href="#home">Home</a>
                  <a href="#news">News</a>
                  <a href="#contact">Contact</a>
                  <a href="#about">About</a>
                </React.Fragment>
              )}

              <button onClick={this.toggleNav} className="icon">
                <i className="fa fa-bars"></i>
              </button>
            </div>
          </div>

          <div className="navbar lagoon" id="myNav">
            <div className="logo">
              <img src="logo192.png" alt="react logo" width="42" height="42" />
            </div>
            <div className="nav-links">
              <a href="#home" className="active">
                Home
              </a>
              <a href="#news">News</a>
              <a href="#contact">Contact</a>
              <a href="#about">About</a>
              <button className="icon">
                <i className="fa fa-bars"></i>
              </button>
            </div>
          </div>

          <div className="navbar sunset" id="myNav">
            <div className="logo">
              <img src="logo192.png" alt="react logo" width="42" height="42" />
            </div>
            <div className="nav-links">
              <a href="#home" className="active">
                Home
              </a>
              <a href="#news">News</a>
              <a href="#contact">Contact</a>
              <a href="#about">About</a>
              <button className="icon">
                <i className="fa fa-bars"></i>
              </button>
            </div>
          </div>

          <div className="navbar moon" id="myNav">
            <div className="logo">
              <img src="logo192.png" alt="react logo" width="42" height="42" />
            </div>
            <div className="nav-links">
              <a href="#home" className="active">
                Home
              </a>
              <a href="#news">News</a>
              <a href="#contact">Contact</a>
              <a href="#about">About</a>
              <button className="icon">
                <i className="fa fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

// if you need state, convert to a class
// update how you pass pprops by prefixing with "tis"
// remove "const" from function declaration
