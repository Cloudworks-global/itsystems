import banner05 from '../../assets/banner05.png'

export const HeaderServices = () => {
    return (
        <div className="uk-container">
            <div className="uk-grid-small uk-grid-match uk-child-width-expand@s uk-text-center" uk-grid="true">
                <div>
                    <div className="uk-card uk-card-body">
                        <h1 className="uk-margin-xlarge-top blue-marine uk-text-bold uk-margin-small">
                            <span className="white font-5">Services</span> <br />
                        </h1>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-body">
                        <img src={banner05} alt="" className='uk-margin' />
                    </div>
                </div>
            </div>
        </div>
    )
}
