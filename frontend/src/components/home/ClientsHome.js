import { Link } from 'react-router-dom'

import slider1 from '../../assets/slider1.jpg'
import slider2 from '../../assets/slider2.jpg'
import slider3 from '../../assets/slider3.jpg'
import slider4 from '../../assets/slider4.jpg'
import slider5 from '../../assets/slider5.jpg'

export const ClientsHome = () => {
    return (
        <div className='uk-container uk-padding-large'>

            <div className="uk-grid-small uk-child-width-expand@s uk-text-center uk-margin" uk-grid="true">
                <div>
                    <div className='uk-text-capitalize uk-text-large uk-text-normal uk-text-bold'>
                         OUR CLIENTS
                    </div>
                </div>
            </div> 

            <div className="uk-position-relative uk-visible-toggle uk-margin" uk-slider="true">

                <div className="uk-slider-container">

                <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m uk-grid">
                    <li>
                        <div className="uk-panel">
                            <img src={slider1} alt="" />
                            <div className="uk-position-center uk-panel"><h1>1</h1></div>
                        </div>
                    </li>
                    <li>
                        <div className="uk-panel">
                            <img src={slider2} alt="" />
                            <div className="uk-position-center uk-panel"><h1>2</h1></div>
                        </div>
                    </li>
                    <li>
                        <div className="uk-panel">
                            <img src={slider3} alt="" />
                            <div className="uk-position-center uk-panel"><h1>3</h1></div>
                        </div>
                    </li>
                    <li>
                        <div className="uk-panel">
                            <img src={slider4} alt="" />
                            <div className="uk-position-center uk-panel"><h1>4</h1></div>
                        </div>
                    </li>
                    <li>
                        <div className="uk-panel">
                            <img src={slider5} alt="" />
                            <div className="uk-position-center uk-panel"><h1>5</h1></div>
                        </div>
                    </li>
                    
                   
                </ul>

                </div>

                <div className="uk-hidden@s uk-light">
                    <Link className="uk-position-center-left uk-position-small" to="#" uk-slidenav-previous="true" uk-slider-item="previous"></Link>
                    <Link className="uk-position-center-right uk-position-small" to="#" uk-slidenav-next="true" uk-slider-item="next"></Link>
                </div>

                <div className="uk-visible@s">
                    <Link className="uk-position-center-left-out uk-position-small" to="#" uk-slidenav-previous="true" uk-slider-item="true; previous"></Link>
                    <Link className="uk-position-center-right-out uk-position-small" to="#" uk-slidenav-next="true" uk-slider-item="true; next"></Link>
                </div>

            </div>

        </div>      
    )
}
