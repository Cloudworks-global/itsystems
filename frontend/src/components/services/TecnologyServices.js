import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import axios from "axios";

import { BASE_URL } from "../../utils/url";

export const TecnologyServices = () => {

  const [data, setData] = useState([]);

  useEffect(async () => {
    return await axios.get(BASE_URL + "/list-technology").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="uk-child-width-expand@s uk-text-center" uk-grid>
      <div>
        <div className="uk-card bg-blue-marine-min color-white uk-card-body">
          <div className="uk-container uk-padding-large">
            <div
              className="uk-grid-small uk-child-width-expand@s uk-text-center uk-margin"
              uk-grid="true"
            >
              <div>
                <div className="uk-text-capitalize uk-text-large uk-text-normal uk-text-bold">
                    TECHNOLOGIES
                </div>
              </div>
            </div>

            <div
              className="uk-position-relative uk-visible-toggle uk-margin"
              uk-slider="true"
            >
              <div className="uk-slider-container">
                <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid uk-text-center">
                  {data.map((data, index) => {
                    return (
                      <li key={index}>
                        <div className="uk-panel">
                          <img src={BASE_URL + `/technology/${data}`} alt={data} />
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="uk-hidden@s uk-light">
                <Link
                  className="uk-position-center-left uk-position-small"
                  to="#"
                  uk-slidenav-previous="true"
                  uk-slider-item="previous"
                ></Link>
                <Link
                  className="uk-position-center-right uk-position-small"
                  to="#"
                  uk-slidenav-next="true"
                  uk-slider-item="next"
                ></Link>
              </div>

              <div className="uk-visible@s">
                <Link
                  className="uk-position-center-left-out uk-position-small"
                  to="#"
                  uk-slidenav-previous="true"
                  uk-slider-item="true; previous"
                ></Link>
                <Link
                  className="uk-position-center-right-out uk-position-small"
                  to="#"
                  uk-slidenav-next="true"
                  uk-slider-item="true; next"
                ></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
