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
                <div className="uk-text-capitalize uk-text-large uk-text-center uk-text-bold uk-raleway">
                  SERVICES
                  <hr className="uk-divider divider"></hr>
                </div>
                <div className="uk-margin-medium-top">
                  <img src={service01} alt="" />
                </div>
                <div
                  className="uk-grid-small uk-child-width-1-1@s uk-child-width-expand@m uk-margin-medium-top uk-text-center uk-flex uk-flex-middle"
                  uk-grid="true"
                >
                  <div>
                    <h1 className="uk-text-capitalize uk-text-large uk-text-center uk-text-bold uk-raleway uk-margin-remove">BEST PRACTICES <br/> PROJETC ROADMAP</h1>
                    <ul className="uk-list uk-list-collapse uk-text-meta">
                      <li>Complementary Assessment</li>
                      <li>Senior developers</li>
                      <li>Secure Design Logic</li>
                      <li>Proof of Concepto</li>
                      <li className="uk-text-bold">Cost effective on-time / on-budget</li>
                    </ul>
                  </div>
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
