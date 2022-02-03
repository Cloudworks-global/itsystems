import contact01 from "../../assets/contact-02.png";

export const HeaderContact = () => {
  return (
    <div className="background-celest">
      <div className="uk-container uk-container-small uk-margin-large-bottom">
        <div
          className="uk-grid-small uk-grid-match uk-flex uk-flex-middle uk-child-width-expand@s uk-text-center uk-padding"
          uk-grid="true"
        >
          <div>
            <div className="uk-card uk-card-body">
              <h1 className="blue-marine uk-text-bold uk-margin-small uk-raleway">
                <span className="white font-4">Contact us</span>
                <br />
              </h1>
            </div>
          </div>
          <div>
            <div className="uk-card uk-card-body">
              <img src={contact01} alt="" className="uk-margin" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
