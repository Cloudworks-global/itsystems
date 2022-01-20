
import card01 from '../../assets/card01.png'
import card02 from '../../assets/card02.png'
import card03 from '../../assets/card03.png'

export const Capabilities = () => {
    return (
        <div className="background-gray uk-padding-large">
            <div className="uk-container">

            <div className="uk-grid-small uk-child-width-expand@s uk-text-center uk-margin-large" uk-grid="true">
                <div>
                    <div className='uk-text-capitalize uk-text-large uk-text-normal uk-text-bold'>
                        OUR CAPABILITIES
                    </div>
                </div>
            </div>

            <div className="uk-child-width-expand@s uk-text-center uk-grid-match" uk-grid="true">
                    <div>
                        <div className="uk-card uk-card-default border-radius">
                            <div className="uk-card-media-top">
                                <img src={card01} alt="" className='border-radius-top' />
                            </div>
                            <div className="uk-card-body uk-padding-large">
                                <h3 className="uk-card-title"><b>We offer expertise</b></h3>
                                <p>In developing systems by using
                                    Microsoft technology, especially
                                    .Net custom developments,
                                    SharePoint and BizTalk.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card-default border-radius">
                            <div className="uk-card-media-top">
                                <img src={card02} alt="" className='border-radius-top' />
                            </div>
                            <div className="uk-card-body uk-padding-large">
                                <h3 className="uk-card-title"><b>Experience and knowledge</b></h3>
                                <p>We provide experience and
                                knowledge in each of our services.
                                We have trained and certified
                                resources to carry out such
                                developments.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card-default border-radius">
                            <div className="uk-card-media-top">
                                <img src={card03} alt="" className='border-radius-top' />
                            </div>
                            <div className="uk-card-body uk-padding-large">
                                <h3 className="uk-card-title"><b>High value-added outcomes</b></h3>
                                <p>We develop high value-added
                                outcomes with significant cost
                                savings for our customers.</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}
