import iconos03 from '../../assets/ultimo-03.png'
import iconos04 from '../../assets/ultimo-04.png'
import iconos05 from '../../assets/ultimo-05.png'
import iconos06 from '../../assets/ultimo-06.png'
import iconos07 from '../../assets/ultimo-07.png'
import iconos08 from '../../assets/ultimo-08.png'

export const WordsAbout = () => {
    return (
        <>
            <div className='uk-container uk-container-small uk-padding'>

                <div className="uk-grid-small uk-child-width-expand@s" uk-grid="true">
                    <div>
                        <div className='uk-text-capitalize uk-text-large uk-text-center uk-text-bold uk-raleway'>
                            A FEW WORDS ABOUT US
                            <hr className="uk-divider divider"></hr>
                        </div>
                        <div className="uk-margin-medium-top">
                            <p>Andres Barreiro and Marcelo Barberena cofounded ITSystems in 2010.</p>
                            
                            <p>ITSystems is an IT service company that focuses on Microsoft products, and has a deep knowledge of SharePoint, BizTalk, and custom
                            .NET developments</p>
                            
                            <p>ITSystems has been working for the international market since 2011. We currently have clients in the United States, Canadá, Mexico,
                            Puerto Rico, Costa Rica, Guatemala, Colombia, Ecuador, Argentina, and Uruguay.</p>
                        </div>
                        <div>
                            <h2 className="uk-text-bold uk-margin-medium-top">Key Success Factors</h2>
                            <p>Our company is based on the following cornerstones to ensure the quality of our services:</p>
                            <p><b>We are a Microsoft Gold Certified Partner in the Application Development Competency and also in the Application Integration</b> Competency.</p>
                        </div>
                    </div>
                </div>
                
                <div className="uk-grid-column-small uk-grid-match uk-child-width-expand@s" uk-grid="true">
                    <div>
                        <div className="uk-card uk-card-default bg-element01 uk-text-center color-white uk-card-body">
                        
                            <img width="80" alt="" src={iconos03}/>
                        
                            <p className="uk-text-large uk-text-bold font-2 uk-text-center">Customised,
                            effective
                            and efficient
                            service</p>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card-default bg-element01 uk-text-center color-white uk-card-body">

                            <img width="80" alt="" src={iconos04}/>

                            <p className="uk-text-large uk-text-bold font-2 uk-text-center">
                            On going
                            staff training
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card-default bg-element01 uk-text-center color-white uk-card-body">

                            <img width="80" alt="" src={iconos05}/>

                            <p className="uk-text-large uk-text-bold font-2 uk-text-center">
                            Edge
                            technology
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card-default bg-element01 uk-text-center color-white uk-card-body">

                            <img width="80" alt="" src={iconos06}/>

                            <p className="uk-text-large uk-text-bold font-2 uk-text-center">
                            On going
                            improvement
                            of process
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card-default bg-element01 uk-text-center color-white uk-card-body">
                            <img width="80" alt="" src={iconos07}/>

                            <p className="uk-text-large uk-text-bold font-2 uk-text-center">
                            Quality and
                            high-added
                            value solutions
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card-default bg-element01 uk-text-center color-white uk-card-body">
                            <img width="80" alt="" src={iconos08}/>
                            <p className="uk-text-large uk-text-bold font-2 uk-text-center">
                            Know - How
                            and experience
                            in each
                            solutions
                            </p>
                        </div>
                    </div>
                </div>

                <div className="uk-grid-small uk-child-width-expand@s" uk-grid="true">
                    <div>
                        <div className='uk-text-capitalize bg-element01 color-white padding-small uk-margin-top uk-text-large uk-text-center'>
                            VALUES
                        </div>
                    </div>
                </div>
                <div className="uk-grid-small uk-child-width-expand@s uk-margin-remove-vertical" uk-grid="true">
                    <div>
                        <div className='uk-text-capitalize bg-element02 color-white uk-margin-small-top card-green uk-text-lead uk-text-center'>
                            RESPONSABILITY
                        </div>
                    </div>
                </div>
                <div className="uk-grid-small uk-child-width-expand@s uk-margin-remove-vertical" uk-grid="true">
                    <div>
                        <div className='uk-text-capitalize bg-element03 color-white uk-margin-small-top card-green uk-text-lead uk-text-center'>
                            RELIABILITY
                        </div>
                    </div>
                </div>
                <div className="uk-grid-small uk-child-width-expand@s uk-margin-remove-vertical" uk-grid="true">
                    <div>
                        <div className='uk-text-capitalize bg-element04 color-white uk-margin-small-top card-green uk-text-lead uk-text-center'>
                            CONFIDENTIALITY
                        </div>
                    </div>
                </div>
                <div className="uk-grid-small uk-child-width-expand@s uk-margin-remove-vertical" uk-grid="true">
                    <div>
                        <div className='uk-text-capitalize bg-element05 color-white uk-margin-small-top card-green uk-text-lead uk-text-center'>
                            COMMITMENT
                        </div>
                    </div>
                </div>
            
            </div>

        </>
    )
}
