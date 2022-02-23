import axios from "axios";

export const FormContact = () => {
    return (
        <>
      
            <div className="uk-container uk-container-small uk-padding">
                <div
                className="uk-grid-small uk-child-width-expand@s"
                uk-grid="true"
                >
                <div>
                    <div className="uk-text-capitalize uk-text-large uk-text-center uk-text-bold uk-raleway">
                        FEEL FREE TO WRITE TO US <hr className="uk-divider divider2"></hr>
                    </div>
                </div>
                </div>
            </div>
          
          <div className="uk-container uk-container-xsmall">
            <div className="uk-container uk-padding">
            <form className="uk-form-stacked">
                <div className="uk-margin">
                <label className="uk-form-label" for="form-stacked-text">
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
                <label className="uk-form-label" for="form-stacked-text">
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
                <label className="uk-form-label" for="form-stacked-text">
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
                <label className="uk-form-label" for="form-stacked-text">
                    Messsage
                </label>
                <div className="uk-form-controls">
                    <textarea
                    class="uk-textarea"
                    id="messsage"
                    type="text"
                    placeholder="Messsage..."
                    required
                    rows="5"
                    ></textarea>
                </div>
                </div>

                <div className="uk-margin">
                    <div className="uk-flex uk-flex-center@m uk-flex-right@l">
                        <button className="uk-button uk-button-default uk-button-pink">SEND</button>
                    </div>
                </div>
            </form>
            </div>
        </div> 
        </>
    )
}
