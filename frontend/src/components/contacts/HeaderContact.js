import contact01 from '../../assets/contact-02.png'

export const HeaderContact = () => {
    return (
        <div className="background-celest uk-padding-large">
            <div className="uk-container">
                <div className="uk-grid-small uk-grid-match uk-child-width-expand@s uk-text-center" uk-grid="true">
                    <div>
                        <div className="uk-card uk-card-body">
                            <h1 className="uk-margin-xlarge-top blue-marine uk-text-bold uk-margin-small">
                                <span className="white font-5">Contact Us</span> <br />
                            </h1>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card-body">
                            <img src={contact01} width={400} alt="" className='uk-margin' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
