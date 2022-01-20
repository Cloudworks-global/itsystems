import banner06 from "../../assets/banner06.png";

export const HiringHome = () => {
  return (
    <>
      <div class="bg-blue-marine01">
        <div className="uk-container">
          <div class="uk-flex uk-flex-center uk-flex-middle">
            <div className="uk-card uk-card-body uk-text-right">
              <img src={banner06} width={300} alt="" className="uk-margin" />
            </div>
            <div className="uk-card uk-card-body uk-text-center">
              <h2 className="uk-margin-remove uk-padding-remove blue-marine uk-text-bold uk-margin-small">
                <span className="color-white">WE ARE HIRING!</span> <br />
              </h2>
              <h4 class="uk-padding-remove uk-margin-remove">
                <span className="color-white">Join our team</span> <br />
              </h4>
              <button class="uk-margin-small-top uk-button uk-button-default uk-button-pink">
                APPLY
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
