import axios from "axios";

export const FormCarrers = () => {
  return (
    <>
      <div className="uk-container uk-container-xsmall">
        <div className="uk-container uk-padding">
          <form className="uk-form-stacked">
            <div className="uk-margin">
              <label className="uk-form-label color-white uk-text-bold" for="form-stacked-text">
                Name
              </label>
              <div className="uk-form-controls">
                <input
                  className="uk-input"
                  id="name"
                  type="text"
                  placeholder="Name..."
                  required
                />
              </div>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label color-white uk-text-bold" for="form-stacked-text">
                Email
              </label>
              <div className="uk-form-controls">
                <input
                  className="uk-input"
                  id="email"
                  type="text"
                  placeholder="Email..."
                  required
                />
              </div>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label color-white uk-text-bold" for="form-stacked-text">
                Phone
              </label>
              <div className="uk-form-controls">
                <input
                  className="uk-input"
                  id="phone"
                  type="text"
                  placeholder="Phone..."
                  required
                />
              </div>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label color-white uk-text-bold" for="form-stacked-text">
                Messsage
              </label>
              <div className="uk-form-controls">
                <input
                  className="uk-input"
                  id="messsage"
                  type="text"
                  placeholder="Messsage..."
                  required
                />
              </div>
            </div>

            <div className="uk-margin">
                <div className="uk-flex uk-flex-center@m uk-flex-right@l">
                    <button className="uk-button uk-button-default uk-margin-right color-white uk-text-bold">UPLOAD CV</button>
                    <button className="uk-button uk-button-default uk-button-pink uk-text-bold">SEND</button>
                </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
