import { HashLink as Link } from 'react-router-hash-link';

export const RewiesServices = () => {
  return (
    <>
      <div className="uk-padding-large">
        <div className="uk-container">
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
                <div class="uk-flex uk-flex-column uk-flex-center">
                  <div class="uk-card-header">
                    <div class="uk-grid-small uk-flex-middle" uk-grid>
                      <div class="uk-width-auto"></div>
                      <div class="uk-width-expand bg-blue-marine-min">
                        <h3 class="uk-card-title uk-margin-remove-bottom color-white uk-padding-small">
                          ITSystems Reviews
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div class="uk-card-body uk-margin-remove uk-padding-small">
                    <p>
                      <span
                        class="uk-margin-small-right"
                        uk-icon="star"
                        style={{ color: "red" }}
                      ></span>
                      <span
                        class="uk-margin-small-right"
                        uk-icon="star"
                        style={{ color: "red" }}
                      ></span>
                      <span
                        class="uk-margin-small-right"
                        uk-icon="star"
                        style={{ color: "red" }}
                      ></span>
                      <span
                        class="uk-margin-small-right"
                        uk-icon="star"
                        style={{ color: "red" }}
                      ></span>
                      <span
                        class="uk-margin-small-right"
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
                  <div class="uk-card-footer">
                    <Link
                      className="uk-button uk-button-default button-resize"
                      to="http://itsystemsinnova.com/services.html#hash"
                    >
                      VIEW MORE
                    </Link>
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
