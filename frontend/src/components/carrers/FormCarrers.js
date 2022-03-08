import { useRef, useState } from "react";

export const FormCarrers = () => {
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);

  const handleClear = () => {
    setFile(null);
  };

  const handleOpenFileInput = () => {
    inputRef.current.click();
  };

  const handleSubmit = () => {
    
  }

  return (
    <>
      <div className="uk-container uk-container-xsmall">
        <div className="uk-container uk-padding">
          <form className="uk-form-stacked">
            <div className="uk-margin">
              <label className="uk-form-label color-white uk-text-bold">
                * Name
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
              <label className="uk-form-label color-white uk-text-bold">
                * Email
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
              <label className="uk-form-label color-white uk-text-bold">
                Phone
              </label>
              <div className="uk-form-controls">
                <input
                  className="uk-input"
                  id="phone"
                  type="text"
                  placeholder="Phone..."
                />
              </div>
            </div>

            <div className="uk-margin">
              <label className="uk-form-label color-white uk-text-bold">
                * Messsage
              </label>
              <div className="uk-form-controls">
                <textarea
                  className="uk-textarea"
                  id="messsage"
                  type="text"
                  placeholder="Messsage..."
                  required
                  rows="5"
                ></textarea>
              </div>
            </div>

            <div className="uk-margin">
              <div className="uk-flex uk-flex-center@m uk-flex-left@l">
                {file && (
                  <p className="uk-raleway uk-text-small uk-text-bold">
                    <span
                      onClick={handleClear}
                      uk-icon="close"
                      className="uk-margin-small-right uk-button-pink uk-padding-xsmall"
                      style={{ cursor: "pointer" }}
                    ></span>
                    Archivo Cargado: {file.name}
                  </p>
                )}
              </div>
              <div className="uk-flex uk-flex-center@m uk-flex-right@l">
                <div className="js-upload" uk-form-custom="true">
                  <input
                    type="file"
                    ref={inputRef}
                    onChange={(e) => {
                      setFile(e.target.files[0]);
                    }}
                    style={{ cursor: "pointer" }}
                  />
                  <button
                    className="uk-button uk-button-default uk-margin-right color-white uk-text-bold"
                    type="button"
                    onClick={handleOpenFileInput}
                  >
                    UPLOAD CV
                  </button>
                </div>
                <button className="uk-button uk-button-default uk-button-pink uk-text-bold" onClick={handleSubmit}>
                  SEND
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
