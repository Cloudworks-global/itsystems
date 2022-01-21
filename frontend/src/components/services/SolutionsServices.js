import { Link } from "react-router-dom";

import vec01 from "../../assets/vec-1.png";
import vec02 from "../../assets/vec-2.png";
import vec03 from "../../assets/vec-3.png";
import vec04 from "../../assets/vec-4.png";

export const SolutionsServices = () => {
  return (
    <>
      <div className="background-gray uk-padding-large">
        <div className="uk-container">
          <div className="uk-container uk-padding">
            <div
              className="uk-grid-small uk-child-width-expand@s"
              uk-grid="true"
            >
              <div>
                <div className="uk-text-capitalize uk-text-large uk-text-center uk-text-bold">
                  SOLUTIONS FOR YOUR BUSINESS! <hr className="uk-divider divider2"></hr>
                </div>
              </div>
            </div>
          </div>
       
          <div className="uk-child-width-expand@s uk-margin-bottom uk-text-center uk-grid-match" uk-grid="true">
            <div>
              <div className="uk-card uk-card-default border-radius">
                <div className="uk-card-media-top">
                  <img src={vec01} alt="" className="border-radius-top" />
                </div>
                <div className="uk-card-body">
                  <h3 className="uk-card-title">Full-stack developments</h3>
                </div>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-default border-radius">
                <div className="uk-card-media-top">
                  <img src={vec02} alt="" className="border-radius-top" />
                </div>
                <div className="uk-card-body">
                  <h3 className="uk-card-title">SharePoint developments</h3>
                </div>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-default border-radius">
                <div className="uk-card-media-top">
                  <img src={vec03} alt="" className="border-radius-top" />
                </div>
                <div className="uk-card-body">
                  <h3 className="uk-card-title">BizTalk developments</h3>
                </div>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-default border-radius">
                <div className="uk-card-media-top">
                  <img src={vec04} alt="" className="border-radius-top" />
                </div>
                <div className="uk-card-body">
                  <h3 className="uk-card-title"></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
