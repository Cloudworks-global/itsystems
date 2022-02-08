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
                <div className="uk-text-capitalize uk-padding-bottom uk-text-large uk-text-normal uk-text-bold uk-raleway">
                    TECHNOLOGIES
                </div>
              </div>
            </div>

            <div
              className="uk-position-relative uk-visible-toggle uk-margin"
              uk-slider="true"
            >
              <div className="uk-slider-container">
                <div className="uk-grid-small uk-child-width-1-4@s uk-flex-center uk-flex-middle uk-text-center" uk-grid="true">
                  
                  {data.map((data, index) => {
                    return (
                      <div key={index}>
                          <div className="uk-card uk-card-body">
                            <img src={BASE_URL + `/technology/${data}`} alt={data} />
                          </div>
                      </div>
                    );
                  })}
                  
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
