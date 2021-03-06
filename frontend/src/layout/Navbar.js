import { NavLink, Link } from "react-router-dom";

import logo from "../assets/logo.png";

import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="uk-container uk-container-large">
      <nav className="uk-navbar-container uk-navbar-transparent uk-margin-bottom" uk-navbar="true">
        <div className="uk-navbar-left">
          <Link to="/" className="uk-logo">
            <img className="uk-responsive-width" style={{
              padding: "1rem",
              width: "200px"
            }} src={logo} alt="logo" />
          </Link>
        </div>

        <div className="uk-navbar-right uk-visible@m">
          <ul className="uk-navbar-nav">
            <li className={({isActive})=>(isActive ? "active" : "")}>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li className={({isActive})=>(isActive ? "active" : "")}>
              <NavLink to="/about">ABOUT US</NavLink>
            </li>
            <li className={({isActive})=>(isActive ? "active" : "")}>
              <NavLink to="/services">SERVICES</NavLink>
            </li>
            {/* <li className={({isActive})=>(isActive ? "active" : "")}>
              <NavLink to="/clients">CLIENTS</NavLink>
            </li> */}
            <li className={({isActive})=>(isActive ? "active" : "")}>
              <NavLink to="/careers">CAREERS</NavLink>
            </li>
            {/* <li className={({isActive})=>(isActive ? "active" : "")}>
              <NavLink to="/awards">AWARDS</NavLink>
            </li> */}
            <li className={({isActive})=>(isActive ? "active" : "")}>
              <NavLink to="/contact">CONTACT</NavLink>
            </li>
          </ul>
        </div>
        
        <div className="uk-navbar-right uk-hidden@m">
          <li>
            <span className="uk-margin-small-right" uk-icon="menu" uk-toggle="target: #offcanvas-usage"></span>
          </li>
        </div>
        

        <div id="offcanvas-usage" uk-offcanvas='true'>
            <div className="uk-offcanvas-bar">

                <button className="uk-offcanvas-close" type="button" uk-close='true'></button>

                <h4 className="uk-raleway uk-text-bold">MENU</h4>

                <ul className="uk-list">
                  <li className={({isActive})=>(isActive ? "active" : "")}>
                    <NavLink to="/">HOME</NavLink>
                  </li>
                  <li className={({isActive})=>(isActive ? "active" : "")}>
                    <NavLink to="/about">ABOUT US</NavLink>
                  </li>
                  <li className={({isActive})=>(isActive ? "active" : "")}>
                    <NavLink to="/services">SERVICES</NavLink>
                  </li>
                  {/* <li className={({isActive})=>(isActive ? "active" : "")}>
                    <NavLink to="/clients">CLIENTS</NavLink>
                  </li> */}
                  <li className={({isActive})=>(isActive ? "active" : "")}>
                    <NavLink to="/careers">CAREERS</NavLink>
                  </li>
                  {/* <li className={({isActive})=>(isActive ? "active" : "")}>
                    <NavLink to="/awards">AWARDS</NavLink>
                  </li> */}
                  <li className={({isActive})=>(isActive ? "active" : "")}>
                    <NavLink to="/contact">CONTACT</NavLink>
                  </li>
                </ul>

            </div>
        </div>

      </nav>
    </div>
  );
};
