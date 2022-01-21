import rate from "../../assets/rate.png";

export const AwardAbout = () => {
  return (
    <>
      <div class="bg-blue-marine01">
        <div className="uk-container">
          <div class="uk-flex uk-flex-center uk-flex-middle">
            
            <div className="uk-card uk-card-body uk-text-center uk-margin-large-top">
              <h3 className="blue-marine uk-text-bold uk-margin-small">
                <span className="color-white">OUR CLIENTS REVIEWS AND AWARDS</span> <br />
              </h3>
              <button class="uk-margin-small-top uk-button uk-button-default uk-button-pink">
                VIEW MORE
              </button>

              <div className="uk-card uk-card-body uk-margin-remove uk-padding-remove">
                <img src={rate} alt="" className="uk-margin-remove" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};
