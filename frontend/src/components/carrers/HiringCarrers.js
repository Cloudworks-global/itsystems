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
                <div className="uk-text-capitalize uk-text-large uk-text-center uk-text-bold">
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
                  class="uk-accordion-title color-white uk-text-center uk-padding-small uk-text-bold"
                  href="#"
                >
                  .NET Developer Junior
                </a>

                <div class="uk-accordion-content">
                  <FormCarrers />
                </div>
              </li>
              <li className=" uk-openuk-text-capitalize bg-blue-marine01 color-white uk-margin-top card-green uk-text-lead">
                <a
                  class="uk-accordion-title color-white uk-text-center uk-padding-small uk-text-bold"
                  href="#"
                >
                  .NET Developer Senior
                </a>

                <div class="uk-accordion-content">
                  <FormCarrers />
                </div>
              </li>
              <li className=" uk-openuk-text-capitalize bg-blue-marine02 color-white uk-margin-top card-green uk-text-lead">
                <a
                  class="uk-accordion-title color-white uk-text-center uk-padding-small uk-text-bold"
                  href="#"
                >
                  SharePoint Developer
                </a>

                <div class="uk-accordion-content">
                  <FormCarrers />
                </div>
              </li>
              <li className=" uk-openuk-text-capitalize bg-blue-marine03 color-white uk-margin-top card-green uk-text-lead">
                <a
                  class="uk-accordion-title color-white uk-text-center uk-padding-small uk-text-bold"
                  href="#"
                >
                  Tester
                </a>

                <div class="uk-accordion-content">
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
