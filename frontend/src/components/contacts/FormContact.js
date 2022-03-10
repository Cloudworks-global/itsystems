import { useRef, useState } from "react";
import axios from "axios";
import { useAlert } from 'react-alert'

import { BASE_URL } from "../../utils/url";


export const FormContact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();

  const alert = useAlert()

  const onSubmit = (e) => {
    e.preventDefault();

    if(!nameRef.current.value || !emailRef.current.value || !messageRef.current.value){
      alert.show('Complete the required fields.')
    }else{
      const formData = new FormData();
      formData.append("name", nameRef.current.value);
      formData.append("email", emailRef.current.value);
      formData.append("phone", phoneRef.current.value);
      formData.append("message", messageRef.current.value);
      axios
        .post(BASE_URL + "/contacts", formData)
        .then((response) => alert.show(response.data.message));

      nameRef.current.value = "";
      emailRef.current.value = "";
      phoneRef.current.value = "";
      messageRef.current.value = "";
    }
  };

  return (
    <>
      <div className="uk-container uk-container-small uk-padding">
        <div className="uk-grid-small uk-child-width-expand@s" uk-grid="true">
          <div>
            <div className="uk-text-capitalize uk-text-large uk-text-center uk-text-bold uk-raleway">
              FEEL FREE TO WRITE TO US <hr className="uk-divider divider2"></hr>
            </div>
          </div>
        </div>
      </div>

      <div className="uk-container uk-container-xsmall">
        <div className="uk-container uk-padding">
          <form className="uk-form-stacked" onSubmit={onSubmit}>
            <div className="uk-margin">
              <label className="uk-form-label" for="form-stacked-text">
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

            <div className="uk-margin">
              <label className="uk-form-label" for="form-stacked-text">
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

            <div className="uk-margin">
              <label className="uk-form-label" for="form-stacked-text">
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

            <div className="uk-margin">
              <label className="uk-form-label" for="form-stacked-text">
                * Messsage
              </label>
              <div className="uk-form-controls">
                <textarea
                  class="uk-textarea"
                  ref={messageRef}
                  type="text"
                  placeholder="Messsage..."
                  rows="5"
                ></textarea>
              </div>
            </div>

            <div className="uk-margin">
              <div className="uk-flex uk-flex-center@m uk-flex-right@l">
                <button className="uk-button uk-button-default uk-button-pink">
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
