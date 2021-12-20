
import banner01 from '../../assets/banner01.png'
import banner02 from '../../assets/banner02.png'
import banner03 from '../../assets/banner03.png'

export const CarouselHome = () => {
    return (
        <div className="uk-container">

            <div className="uk-position-relative uk-visible-toggle uk-light" uk-slideshow="true; animation: fade; min-height: 300; max-height: 500">

                <ul className="uk-slideshow-items">
                    <li>
                        <div className="uk-grid-small uk-child-width-expand uk-grid-match" uk-grid="true">
                            <div>
                                <h1 className="uk-margin-xlarge-top blue-marine uk-text-bold">
                                    Commitment trust and
                                    strength in <span className="blue-white">business
                                    solutions based on IT
                                    Technologies.</span>
                                </h1>
                            </div>
                            <div>
                                <div className="uk-card uk-card-body">
                                    <img src={banner01} alt="" className='uk-margin-xlarge-top' uk-cover="true" />
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="uk-grid-small uk-child-width-expand uk-grid-match" uk-grid="true">
                            <div>
                                <div className="uk-card uk-card-body">
                                    <img src={banner02} alt="" className='uk-margin-xlarge-top' uk-cover="true" />
                                </div>
                            </div>
                            <div>
                                <h1 className="uk-margin-xlarge-top blue-marine uk-text-bold uk-margin-small">
                                    <span className="white">"IF YOU ARE SUCCESSFUL THEN WE ARE SUCCESSFUL"</span> <br />
                                </h1>
                                <h3 className="uk-margin-remove">
                                    <span className="blue-white">A solid and long lasting business relationship will be forged by achieving your goals and meeting your expectations.</span>
                                </h3>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="uk-grid-small uk-child-width-expand uk-grid-match" uk-grid="true">
                            <div>
                                <h1 className="uk-margin-xlarge-top blue-marine uk-text-bold">
                                    Excellent solutions <br /> for your business
                                </h1>
                            </div>
                            <div>
                                <div className="uk-card uk-card-body">
                                    <img src={banner03} alt="" className='uk-margin-xlarge-top' uk-cover="true" />
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>

                <ul className="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>

            </div>

        </div>
    )
}
