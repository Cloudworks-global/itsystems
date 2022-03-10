import { useRef, useState } from "react";
import axios from "axios";
import { useAlert } from 'react-alert'

import { BASE_URL } from "../../utils/url";

export const FormCarrers = () => {
  const inputRef = useRef(null);
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();

  const alert = useAlert()

  const [file, setFile] = useState(null);

  const handleClear = () => {
    setFile(null);
  };

  const handleOpenFileInput = () => {
    inputRef.current.click();
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if(!nameRef.current.value || !emailRef.current.value){
      alert.show('Complete the required fields.')
    }else{
      if (!file) {
        alert.show('You must select a resume file.')
      }else{
        const formData = new FormData();
        formData.append("name", nameRef.current.value);
        formData.append("email", emailRef.current.value);
        formData.append("phone", phoneRef.current.value);
        formData.append("message", messageRef.current.value);
        formData.append("cv", file);
        axios
          .post(BASE_URL + "/email-cv", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => alert.show(response.data.message));
  
        nameRef.current.value = "";
        emailRef.current.value = "";
        phoneRef.current.value = "";
        messageRef.current.value = "";
        setFile(null);
      }
    }
    
  };

  return (
    <>
      <div className="uk-container uk-container-xsmall">
        <div className="uk-container uk-padding">
          <form className="uk-form-stacked" onSubmit={onSubmit}>
            <div className="uk-margin uk-margin-left uk-margin-right">
              <label className="uk-form-label color-white uk-text-bold">
                * Name
              </label>
              <div className="uk-form-controls">
                <input
                  className="uk-input"
                  ref={nameRef}
                  type="text"
                  placeholder="Name..."
                />
              </div>
            </div>

            <div className="uk-margin uk-margin-left uk-margin-right">
              <label className="uk-form-label color-white uk-text-bold">
                * Email
              </label>
              <div className="uk-form-controls">
                <input
                  className="uk-input"
                  ref={emailRef}
                  type="text"
                  placeholder="Email..."
                />
              </div>
            </div>

            <div className="uk-margin uk-margin-left uk-margin-right">
              <label className="uk-form-label color-white uk-text-bold">
                Phone
              </label>
              <div className="uk-form-controls">
                <input
                  className="uk-input"
                  ref={phoneRef}
                  type="text"
                  placeholder="Phone..."
                />
              </div>
            </div>

            <div className="uk-margin uk-margin-left uk-margin-right">
              <label className="uk-form-label color-white uk-text-bold">
                Messsage
              </label>
              <div className="uk-form-controls">
                <textarea
                  className="uk-textarea"
                  ref={messageRef}
                  type="text"
                  placeholder="Messsage..."
                  rows="5"
                ></textarea>
              </div>
            </div>

            <div className="uk-margin uk-margin-left uk-margin-right">
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
              <div className="uk-flex uk-flex-right@m uk-flex-center">
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
                    * UPLOAD RESUME
                  </button>
                </div>
                <button className="uk-button uk-button-default uk-button-pink uk-text-bold">
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
