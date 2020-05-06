import React, { Component } from "react";
import "./style.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      innerWidth: window.innerWidth,
      showNavLinks: false,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", () => {
      this.setState({
        innerWidth: window.innerWidth,
      });
    });
  }

  toggleNav = () => {
    this.setState({
      showNavLinks: this.state.showNavLinks,
    });
  };

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
              {(this.state.showNavLinks || this.state.innerWidth >= 600) && (
                <React.Fragment>
                  <a href="#home">Home</a>
                  <a href="#news">News</a>
                  <a href="#contact">Contact</a>
                  <a href="#about">About</a>
                </React.Fragment>
              )}

              <button onClick={this.toggleNav} className="midnight icon">
                <i className="fa fa-bars"></i>
              </button>
            </div>
          </div>

          <div className="navbar lagoon" id="myNav">
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

          <div className="navbar sunset" id="myNav">
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

          <div className="navbar moon" id="myNav">
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
        </div>
      </div>
    );
  }
}

export default Header;

// if you need state, convert to a class
// update how you pass pprops by prefixing with "tis"
// remove "const" from function declaration
