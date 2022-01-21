import banner07 from "../../assets/banner07.png";

export const HeaderReviews = () => {
  return (
    <div className="uk-container">
      <div
        className="uk-grid-small uk-grid-match uk-child-width-expand@s uk-text-center uk-padding"
        uk-grid="true"
      >
        <div>
          <div className="uk-card uk-card-body">
            <h1 className="uk-margin-xlarge-top blue-marine uk-text-bold uk-margin-small">
              <span className="white">
                OUR CLIENTS REVIEWS AND AWARDS
              </span>
              <br />
            </h1>
          </div>
        </div>
        <div>
          <div className="uk-card uk-card-body">
            <img src={banner07} width={200} alt="" className="uk-margin" />
          </div>
        </div>
      </div>
    </div>
  );
};
