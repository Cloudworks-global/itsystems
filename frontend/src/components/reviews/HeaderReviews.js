import banner07 from "../../assets/banner07.png";

export const HeaderReviews = () => {
  return (
    <div className="uk-container uk-container-small">
      <div
        className="uk-grid-small uk-grid-match uk-flex uk-flex-middle uk-child-width-expand@s uk-text-center uk-padding"
        uk-grid="true"
      >
        <div>
          <div className="uk-card uk-card-body">
            <h1 className="blue-marine uk-text-bold uk-margin-small uk-raleway">
              <span className="white font-4 uk-visible@s">OUR CLIENTS REVIEWS AND AWARDS</span>
              <span className="white font-8 uk-hidden@s">OUR CLIENTS REVIEWS AND AWARDS</span>
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
