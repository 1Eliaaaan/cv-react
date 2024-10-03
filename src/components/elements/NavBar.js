import React from "react";
import MenuItem from "./MenuItem";
import Resume from "../../resume.json";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showMenu: false };
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick(e) {
    const currentState = this.state.showMenu;
    this.setState({ showMenu: !currentState });
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
 
      >
        <div className="container">
          <div className="navbar-brand"  style={{ margin : "auto"  }}>
          <a href="https://d19o0ng1o3cl3u.cloudfront.net/cv-resources/CV.pdf" className="button is-link " target="_blank" rel="noopener noreferrer"  style={{ margin : "auto"  }}>
  Download CV
</a>
          {/* <button class="button is-link">Download CV</button> */}
            <span
              className="navbar-burger burger"
              onClick={this.handleMenuClick}
            >
              <span className="has-background-white"></span>
              <span className="has-background-white"></span>
              <span className="has-background-white"></span>
            </span>
          </div>
          <div
            className={
              "navbar-menu nav-menu " +
              (this.state.showMenu ? "is-active" : null)
            }
          >
            <div className="navbar-end" onClick={this.handleMenuClick}>
              <MenuItem text="About Me" href="#aboutMe" />
              <MenuItem text="Skills" href="#skills" />
              <MenuItem text="Education" href="#Education" />
              <MenuItem text="Experience" href="#experience" />
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
