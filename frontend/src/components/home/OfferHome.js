import { Link } from 'react-router-dom'

import iconos11 from '../../assets/iconos11.svg'
import iconos12 from '../../assets/iconos12.svg'
import iconos13 from '../../assets/iconos13.svg'
import iconos14 from '../../assets/iconos14.svg'

export const OfferHome = () => {
    return (
        <div className='uk-container uk-padding'>

            <div className="uk-grid-small uk-child-width-expand@s uk-text-center" uk-grid="true">
                <div>
                    <div className='uk-text-capitalize uk-text-large uk-text-normal uk-text-bold'>
                        WHAT WE OFFER
                        <hr className="uk-divider divider"></hr>
                    </div>
                </div>
            </div>

            <div className="uk-grid-medium uk-padding uk-child-width-1-1@s uk-child-width-1-2@m uk-grid-match" uk-grid="true">
                <div>
                    <div className="uk-card uk-card-body">
                        <article className="uk-article">

                       
                            <img width="80" alt="" uk-img={iconos11} uk-svg="true"></img>

                            <h1 className="uk-article-title"><Link className="uk-link-reset" to="">Going The Extra Mile</Link></h1>

                            <p>We realize that customers are not cases, but people with challenges
                                and problems that need resolving. We take great pride
                                in making their life easier. We work in true partnership with our
                                clients to understand what matters most to them, their key
                                drivers for success and how to give them the freedom and
                                control they need to do great things.</p>
                        </article>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-body">
                        <article className="uk-article">

                            <img width="70" alt="" uk-img={iconos12} uk-svg="true"></img>

                            <h1 className="uk-article-title"><Link className="uk-link-reset" to="">Customer Prioritization</Link></h1>

                            <p>Customer success is what motivates us every day and is key
                            to everything we do. We help people resolve problems to make
                            their life easier. We work hard, we resolve issues and we address
                            your challenges. We lead by example in everything that
                            we do and we do with respect and professionalism.</p>

                        </article>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-body">
                        <article className="uk-article">

                            <img width="80" alt="" uk-img={iconos13} uk-svg="true"></img>

                            <h1 className="uk-article-title"><Link className="uk-link-reset" to="">Share Knowledge</Link></h1>

                            <p>We undertsand that sharing our knowledge with our clients is
                            for the greater good and it is empowering. Our experience and
                            expertise is precious and we go out of our way to help and
                            provide great customer service to our clients so we can all
                            achieve better outcomes.</p>

                        </article>
                    </div>
                </div>
                <div>
                    <div className="uk-card uk-card-body">
                        <article className="uk-article">

                            <img width="100" alt="" uk-img={iconos14} uk-svg="true"></img>

                            <h1 className="uk-article-title"><Link className="uk-link-reset" to="">Stronger Together</Link></h1>

                            <p>Collaboration and support is critical to how we develop as a
                            team and it is the backbone of what makes us great. It does
                            not matter if we are in different locations, what matters is that
                            we work as a global team.</p>

                        </article>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
