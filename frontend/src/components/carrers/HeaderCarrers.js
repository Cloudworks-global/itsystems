import banner06 from '../../assets/banner06.png'

export const HeaderCarrers = () => {
    return (
        <div className="uk-container">
            <div className="uk-grid-small uk-grid-match uk-child-width-expand@s uk-text-center" uk-grid="true">
                <div>
                    <div className="uk-card uk-card-body">
                        <h1 className="uk-margin-xlarge-top blue-marine uk-text-bold uk-margin-small">
                            <span className="white font-5">Careers</span> <br />
                        </h1>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-body">
                        <img src={banner06} alt="" className='uk-margin' />
                    </div>
                </div>
            </div>
        </div>
    )
}
