import { Link } from "react-router-dom";

import logo from "../assets/logo-white.png";
import microsoft from '../assets/microsoft.png'

import './Footer.css'

export const Footer = () => {
  return (
    <div className="background-primary">
      <div className="uk-container uk-container-medium">
        <div
          className="uk-grid-divider uk-child-width-expand@s uk-text-center uk-padding"
          uk-grid="true"
        >
          <div>
            <Link to="#" className="uk-logo">
              <img
                className="uk-responsive-width"
                style={{
                  padding: "1rem",
                  width: "200px",
                }}
                src={logo}
                alt="logo"
              />
            </Link>
          </div>
          <div>
            <img
              className="uk-responsive-width"
              style={{
                padding: "1rem",
                width: "200px",
              }}
              src={microsoft}
              alt="logo"
            />
          </div>
          <div>
            <article className="uk-article">

                <p className="uk-text-lead gray">Contact Us Today</p>

                <ul className="uk-list gray">
                    <li>Phone: (+598) 9125-9420</li>
                    <li>Email: info@itsystemsinnova.com</li>
                    <li>Address: Tacuarembó 1429</li>
                    <li>Montevideo, Uruguay</li>
                </ul>

            </article>
            
          </div>
        </div>
      </div>
    </div>
  );
};
