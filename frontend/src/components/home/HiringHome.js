import { HashLink as Link } from "react-router-hash-link";

import banner06 from "../../assets/banner06.png";

export const HiringHome = () => {
  return (
    <>
      <div className="bg-blue-marine01">
        <div className="uk-container">
          <div className="uk-flex uk-flex-center uk-flex-middle">
            <div className="uk-card uk-card-body uk-text-right uk-visible@m">
              <img src={banner06} width={300} alt="" className="uk-margin" />
            </div>
            <div className="uk-card uk-card-body uk-text-center">
              <h2 className="uk-margin-remove uk-padding-remove blue-marine uk-text-bold uk-margin-small">
                <span className="color-white uk-raleway">WE ARE HIRING!</span> <br />
              </h2>
              <h4 className="uk-padding-remove uk-margin-remove">
                <span className="color-white">Join our team</span> <br />
              </h4>
              <Link
                smooth
                to="/careers#top"
                className="uk-margin-small-top uk-button uk-button-default uk-button-pink"
              >
                APPLY
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
