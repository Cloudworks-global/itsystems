import { HashLink as Link } from 'react-router-hash-link';

export const RewiesServices = () => {
  return (
    <>
      <div className="uk-padding">
        <div className="uk-container uk-container-small">
          <div className="uk-container uk-padding">
            <div
              className="uk-grid-small uk-child-width-expand@s uk-text-center"
              uk-grid="true"
            >
              <div>
                <div className="uk-text-capitalize uk-text-large uk-text-center uk-text-bold">
                  REVIEWS
                  <hr className="uk-divider divider"></hr>
                </div>
                <div className="uk-flex uk-flex-column uk-flex-center">
                  <div className="uk-card-header">
                    <div className="uk-grid-small uk-flex-middle" uk-grid>
                      <div className="uk-width-auto"></div>
                      <div className="uk-width-expand bg-blue-marine-min">
                        <h3 className="uk-card-title uk-margin-remove-bottom color-white uk-padding-small">
                          ITSystems Reviews
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="uk-card-body uk-margin-remove uk-padding-small">
                    <p>
                      <span
                        className="uk-margin-small-right"
                        uk-icon="star"
                        style={{ color: "red" }}
                      ></span>
                      <span
                        className="uk-margin-small-right"
                        uk-icon="star"
                        style={{ color: "red" }}
                      ></span>
                      <span
                        className="uk-margin-small-right"
                        uk-icon="star"
                        style={{ color: "red" }}
                      ></span>
                      <span
                        className="uk-margin-small-right"
                        uk-icon="star"
                        style={{ color: "red" }}
                      ></span>
                      <span
                        className="uk-margin-small-right"
                        uk-icon="star"
                        style={{ color: "red" }}
                      ></span>
                    </p>
                    <p>
                      <span className="uk-text-small">
                        {" "}
                        IT Consulting & SI, Managed IT Services, Development |
                        OCT 14, 2021
                      </span>
                    </p>
                    <hr className="uk-divider divider"></hr>
                    <p className="uk-text-large">
                      Intranet Development for Technology Consulting Firm
                    </p>
                    <span className="uk-text-small">
                      " ITSystems is a reliable team "
                    </span>
                  </div>
                  <div className="uk-card-footer">
                    <a
                      href="https://clutch.co/profile/itsystems?utm_source=widget&utm_medium=4&utm_campaign=widget&utm_content=stars#summary"
                      target="_blank"
                      className="uk-button uk-button-default button-resize"
                    >
                      VIEW MORE
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
