import banner04 from '../../assets/banner04.png'

export const HeaderAbout = () => {
    return (
        <div className="uk-container">
            <div className="uk-grid-small uk-grid-match uk-child-width-expand@s uk-text-center" uk-grid="true">
                <div>
                    <div className="uk-card uk-card-body">
                        <h1 className="uk-margin-xlarge-top blue-marine uk-text-bold uk-margin-small">
                            <span className="white font-5">About us</span> <br />
                        </h1>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-body">
                        <img src={banner04} alt="" className='uk-margin' />
                    </div>
                </div>
            </div>
        </div>
    )
}
