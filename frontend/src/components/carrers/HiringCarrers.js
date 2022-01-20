import { Link } from "react-router-dom";

export const HiringCarrers = () => {
  return (
    <>
      <div className="background-gray uk-padding-large">
        <div className="uk-container">
          <div className="uk-container uk-padding">
            <div
              className="uk-grid-small uk-child-width-expand@s uk-text-center"
              uk-grid="true"
            >
              <div>
                <div className="uk-text-capitalize uk-text-large uk-text-center uk-text-bold">
                  WE ARE HIRING!
                  <hr className="uk-divider divider"></hr>
                </div>
                <div className="uk-margin-medium-top">
                  <p className="uk-text-meta">Please attach your resume.</p>
                </div>
              </div>
            </div>

            <div
              className="uk-grid-small uk-child-width-expand@s uk-margin-remove-vertical"
              uk-grid="true"
            >
              <div>
                <div className="uk-text-capitalize bg-blue-marine color-white uk-margin-top card-green uk-text-lead uk-text-center">
                  .NET Developer Junior
                </div>
              </div>
            </div>
            <div
              className="uk-grid-small uk-child-width-expand@s uk-margin-remove-vertical"
              uk-grid="true"
            >
              <div>
                <div className="uk-text-capitalize bg-blue-marine01 color-white uk-margin-top card-green uk-text-lead uk-text-center">
                  .NET Developer Senior
                </div>
              </div>
            </div>
            <div
              className="uk-grid-small uk-child-width-expand@s uk-margin-remove-vertical"
              uk-grid="true"
            >
              <div>
                <div className="uk-text-capitalize bg-blue-marine02 color-white uk-margin-top card-green uk-text-lead uk-text-center">
                  SharePoint Developer
                </div>
              </div>
            </div>
            <div
              className="uk-grid-small uk-child-width-expand@s uk-margin-remove-vertical"
              uk-grid="true"
            >
              <div>
                <div className="uk-text-capitalize bg-blue-marine03 color-white uk-margin-top card-green uk-text-lead uk-text-center">
                  Tester
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
