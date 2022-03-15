import banner06 from '../../assets/banner06.png'

export const HeaderCarrers = () => {
    return (
        <div className="uk-container uk-container-small uk-margin-large-bottom">
            <div
                className="uk-grid-small uk-grid-match uk-flex uk-flex-middle uk-child-width-expand@s uk-text-center uk-padding"
                uk-grid="true"
            >
                <div>
                <div className="uk-card uk-card-body">
                    <h1 className="blue-marine uk-text-bold uk-margin-small uk-raleway">
                    <span className="white font-4 uk-visible@s">Careers</span>
                    <span className="white font-8 uk-hidden@s">Careers</span>
                    <br />
                    </h1>
                </div>
                </div>
                <div>
                <div className="uk-card uk-card-body">
                    <img src={banner06} alt="" className="uk-margin" />
                </div>
                </div>
            </div>
        </div>
    )
}
