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
      if (this.state.innerWidth >= 600 && window.innerWidth < 600) {
        this.setState({ showNavLinks: false });
      }
      this.setState({
        innerWidth: window.innerWidth,
      });
    });
  }

  toggleNav = () => {
    this.setState({
      showNavLinks: !this.state.showNavLinks,
    });
  };

  handleNavLinks = () => {
    if (this.state.innerWidth >= 600) {
      return (
        <React.Fragment>
          <a href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </React.Fragment>
      );
    } else if (this.state.innerWidth < 600 && this.state.showNavLinks) {
      return (
        <React.Fragment>
          <button onClick={this.toggleNav} className="midnight icon">
            <i className="fa fa-bars"></i>
          </button>

          <a href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </React.Fragment>
      );
    } else {
      return (
        <button onClick={this.toggleNav} className="midnight icon">
          <i className="fa fa-bars"></i>
        </button>
      );
    }
  };

  render() {
    return (
      <div>
        <div className="comp-cat headers">
          <h1> Headers:</h1>

          <div className="navbar midnight" id="myNav">
            <div className="logo">
              <img src="codeMonster(light).png" alt="logo" height="42" />
            </div>
            <div className="nav-links">{this.handleNavLinks()}</div>
          </div>

          <div className="navbar lagoon" id="myNav">
            <div className="logo">
              <img src="codeMonster.png" alt="logo" height="42" />
            </div>
            <div className="nav-links">{this.handleNavLinks()}</div>
          </div>

          <div className="navbar sunset" id="myNav">
            <div className="logo">
              <img src="codeMonster.png" alt="logo" height="42" />
            </div>
            <div className="nav-links">{this.handleNavLinks()}</div>
          </div>

          <div className="navbar moon" id="myNav">
            <div className="logo">
              <img src="codeMonster.png" alt="logo" height="42" />
            </div>
            <div className="nav-links">{this.handleNavLinks()}</div>
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
