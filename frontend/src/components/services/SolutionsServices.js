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
                <div className="uk-text-capitalize uk-text-large uk-text-center uk-text-bold uk-raleway">
                  SOLUTIONS FOR YOUR BUSINESS! <hr className="uk-divider divider2"></hr>
                </div>
              </div>
            </div>
          </div>
       
          <div className="uk-child-width-expand@s uk-margin-bottom uk-text-center uk-grid-match" uk-grid="true">
            <div>
              <div className="uk-card uk-card-default border-radius">
                <div className="uk-card-media-top">
                  <img src={vec01} width={230} alt="" className="border-radius-top" style={{marginTop: '3rem'}} />
                </div>
                <div className="uk-card-body">
                  <h3 className="uk-card-title uk-text-bold" style={{marginBottom: '2rem'}}>Full-stack developments</h3>
                </div>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-default border-radius">
                <div className="uk-card-media-top">
                  <img src={vec02} width={230} alt="" className="border-radius-top" style={{marginTop: '3rem'}} />
                </div>
                <div className="uk-card-body">
                  <h3 className="uk-card-title uk-text-bold" style={{marginBottom: '2rem'}}>SharePoint developments</h3>
                </div>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-default border-radius">
                <div className="uk-card-media-top">
                  <img src={vec03} width={230} alt="" className="border-radius-top" style={{marginTop: '3rem'}} />
                </div>
                <div className="uk-card-body">
                  <h3 className="uk-card-title uk-text-bold" style={{marginBottom: '2rem'}}>BizTalk developments</h3>
                </div>
              </div>
            </div>
            <div>
              <div className="uk-card uk-card-default border-radius">
                <div className="uk-card-media-top">
                  <img src={vec04} width={230} alt="" className="border-radius-top" style={{marginTop: '3rem'}} />
                </div>
                <div className="uk-card-body">
                  <h3 className="uk-card-title uk-text-bold" style={{marginBottom: '2rem'}}></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
