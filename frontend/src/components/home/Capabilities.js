import card01 from "../../assets/card01.png";
import card02 from "../../assets/card02.png";
import card03 from "../../assets/card03.png";

export const Capabilities = () => {
  return (
    <div className="background-gray uk-padding-large">
      <div className="uk-container">
        <div
          className="uk-grid-small uk-child-width-expand@s uk-text-center uk-margin-large"
          uk-grid="true"
        >
          <div>
            <div className="uk-text-capitalize uk-text-large uk-text-normal uk-text-bold uk-raleway">
              OUR CAPABILITIES
            </div>
          </div>
        </div>

        <div
          className="uk-child-width-expand@s uk-margin-bottom uk-text-center uk-grid-match"
          uk-grid="true"
        >
          <div>
            <img
              src={card01}
              width={230}
              alt=""
              className="border-radius-top uk-box-shadow-xlarge uk-box-shadow-hover-medium"
              style={{ borderRadius: "25px" }}
            />
          </div>
          <div>
            <img
              src={card02}
              width={230}
              alt=""
              className="border-radius-top uk-box-shadow-xlarge uk-box-shadow-hover-medium"
              style={{ borderRadius: "25px" }}
            />
          </div>
          <div>
            <img
              src={card03}
              width={230}
              alt=""
              className="border-radius-top uk-box-shadow-xlarge uk-box-shadow-hover-medium"
              style={{ borderRadius: "25px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
