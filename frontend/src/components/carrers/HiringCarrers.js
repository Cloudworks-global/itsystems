import { Link } from "react-router-dom";
import { FormCarrers } from "./FormCarrers";

export const HiringCarrers = () => {
  return (
    <>
      <div className="background-gray uk-padding-large">
        <div className="uk-container uk-container-small">
          <div className="uk-container uk-padding">
            <div
              className="uk-grid-small uk-child-width-expand@s uk-text-center"
              uk-grid="true"
            >
              <div>
                <div className="uk-text-capitalize uk-text-large uk-text-center uk-text-bold uk-raleway">
                  WE ARE HIRING!
                  <hr className="uk-divider divider01"></hr>
                </div>
                <div className="uk-margin-medium-top">
                  <p className="uk-text-small uk-text-bold">Please attach your resume.</p>
                </div>
              </div>
            </div>

            <ul uk-accordion="true">
              <li className=" uk-openuk-text-capitalize bg-blue-marine color-white uk-margin-top card-green uk-text-lead">
                <a
                  className="uk-accordion-title color-white uk-text-center uk-padding-small uk-text-bold"
                  href="#"
                  style={{fontSize: '16px'}}
                >
                  .NET Developer Junior
                </a>

                <div className="uk-accordion-content">
                  <FormCarrers />
                </div>
              </li>
              <li className=" uk-openuk-text-capitalize bg-blue-marine01 color-white uk-margin-top card-green uk-text-lead">
                <a
                  className="uk-accordion-title color-white uk-text-center uk-padding-small uk-text-bold"
                  href="#"
                  style={{fontSize: '16px'}}
                >
                  .NET Developer Senior
                </a>

                <div className="uk-accordion-content">
                  <FormCarrers />
                </div>
              </li>
              <li className=" uk-openuk-text-capitalize bg-blue-marine02 color-white uk-margin-top card-green uk-text-lead">
                <a
                  className="uk-accordion-title color-white uk-text-center uk-padding-small uk-text-bold"
                  href="#"
                  style={{fontSize: '16px'}}
                >
                  SharePoint Developer
                </a>

                <div className="uk-accordion-content">
                  <FormCarrers />
                </div>
              </li>
              <li className=" uk-openuk-text-capitalize bg-blue-marine03 color-white uk-margin-top card-green uk-text-lead">
                <a
                  className="uk-accordion-title color-white uk-text-center uk-padding-small uk-text-bold"
                  href="#"
                  style={{fontSize: '16px'}}
                >
                  Tester
                </a>

                <div className="uk-accordion-content">
                  <FormCarrers />
                </div>
              </li>
            </ul>

          </div>
        </div>
      </div>
    </>
  );
};
