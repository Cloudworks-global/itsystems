import axios from "axios";

export const FormCarrers = () => {
  return (
    <>
      <div className="uk-container uk-container-xsmall">
        <div className="uk-container uk-padding">
          <form class="uk-form-stacked">
            <div class="uk-margin">
              <label class="uk-form-label" for="form-stacked-text">
                Name
              </label>
              <div class="uk-form-controls">
                <input
                  class="uk-input"
                  id="name"
                  type="text"
                  placeholder="Name..."
                  required
                />
              </div>
            </div>

            <div class="uk-margin">
              <label class="uk-form-label" for="form-stacked-text">
                Email
              </label>
              <div class="uk-form-controls">
                <input
                  class="uk-input"
                  id="email"
                  type="text"
                  placeholder="Email..."
                  required
                />
              </div>
            </div>

            <div class="uk-margin">
              <label class="uk-form-label" for="form-stacked-text">
                Phone
              </label>
              <div class="uk-form-controls">
                <input
                  class="uk-input"
                  id="phone"
                  type="text"
                  placeholder="Phone..."
                  required
                />
              </div>
            </div>

            <div class="uk-margin">
              <label class="uk-form-label" for="form-stacked-text">
                Messsage
              </label>
              <div class="uk-form-controls">
                <input
                  class="uk-input"
                  id="messsage"
                  type="text"
                  placeholder="Messsage..."
                  required
                />
              </div>
            </div>

            <div className="uk-margin">
                <div className="uk-flex uk-flex-center@m uk-flex-right@l">
                    <button class="uk-button uk-button-default uk-margin-right">UPLOAD CV</button>
                    <button class="uk-button uk-button-default uk-button-pink">SEND</button>
                </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
