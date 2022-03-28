import { useEffect, useState } from "react";

import { BASE_URL } from "../../utils/url";

import axios from "axios";

export const ClientsHome = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    return await axios.get(BASE_URL + "/list-clients").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="uk-container uk-padding-large">
      <div
        className="uk-grid-small uk-child-width-expand@s uk-text-center uk-margin"
        uk-grid="true"
      >
        <div>
          <div className="uk-text-capitalize uk-text-large uk-text-normal uk-text-bold uk-margin-bottom uk-raleway">
            OUR CLIENTS
          </div>
        </div>
      </div>

      <div uk-slider="finite: true; autoplay: true">

        <div className="uk-position-relative">

            <div className="uk-slider-container uk-light">
                <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-5@m">
                {data.map((data, index) => {
                 return (
                    <li key={index}>
                      <div className="uk-panel">
                        <img src={BASE_URL + `/clients/${data}`} alt={data} />
                      </div>
                    </li>
                  );
                })}
                </ul>
            </div>

            <div className="uk-hidden@s uk-light">
                <a className="uk-position-center-left uk-position-small" href="#" uk-slidenav-previous="true" uk-slider-item="previous"></a>
                <a className="uk-position-center-right uk-position-small" href="#" uk-slidenav-next="true" uk-slider-item="next"></a>
            </div>

            <div className="uk-visible@s">
                <a className="uk-position-center-left-out uk-position-small" href="#" uk-slidenav-previous="true" uk-slider-item="previous"></a>
                <a className="uk-position-center-right-out uk-position-small" href="#" uk-slidenav-next="true" uk-slider-item="next"></a>
            </div>


        </div>

        <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

      </div>

      
    </div>
  );
};
