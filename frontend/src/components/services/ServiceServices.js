import service01 from "../../assets/service01.png";
import service02 from "../../assets/service02.png";

export const ServiceServices = () => {
  return (
    <>
      <div className="uk-padding-large">
        <div className="uk-container">
          <div className="uk-container uk-padding">
            <div
              className="uk-grid-small uk-child-width-expand@s"
              uk-grid="true"
            >
              <div>
                <div className="uk-text-capitalize uk-text-large uk-text-center uk-text-bold">
                  SERVICES
                  <hr className="uk-divider divider"></hr>
                </div>
                <div className="uk-margin-medium-top">
                  <img src={service01} alt="" />
                </div>
                <div
                  className="uk-grid-small uk-child-width-auto uk-margin-medium-top uk-text-right"
                  uk-grid="true"
                >
                  <div>
                    <img src={service02} width={700} alt="" />
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
