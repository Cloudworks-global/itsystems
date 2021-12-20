import { Link } from 'react-router-dom'

import iconos06 from '../../assets/iconos06.svg'
import iconos07 from '../../assets/iconos07.svg'
import iconos08 from '../../assets/iconos08.svg'
import iconos09 from '../../assets/iconos09.svg'
import iconos10 from '../../assets/iconos10.svg'

export const CardsAbout = () => {
    return (
        <>
            <div className='uk-container uk-padding'>

                <div className="uk-grid-small uk-child-width-expand@s" uk-grid="true">
                    <div>
                        <div className='uk-text-capitalize uk-margin-top uk-text-large uk-text-center uk-text-bold'>
                            A FEW WORDS ABOUT US
                        </div>
                    </div>
                </div>

                <div className="uk-grid-medium uk-child-width-1-2 uk-text-center uk-grid-match" uk-grid="true">
                    <div>
                        <div className="uk-card uk-card-body">
                            <article className="uk-article">
                        
                                <img width="80" alt="" uk-img={iconos06} uk-svg="true"></img>

                                <h1 className="uk-article-title"><Link className="uk-link-reset" to="">Technical Knowledge</Link></h1>

                                <p>Staying updated with the latest technology
                                trends is essential for ITSystems. All of our
                                developers should also remain exible to
                                learn new tools and technologies as per the
                                work requirement and changing trends.</p>

                            </article>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card-body">
                            <article className="uk-article">

                                <img width="70" alt="" uk-img={iconos07} uk-svg="true"></img>

                                <h1 className="uk-article-title"><Link className="uk-link-reset" to="">Problem Solving Skills</Link></h1>

                                <p>We must be aware of the fact that the main
                                thesis of software development is "solving
                                some kind of problem". Software
                                development provides the solution to that
                                problem. This is a condition that all of our
                                employees must have.</p>

                            </article>
                        </div>
                    </div>
                </div>

                <div className="uk-grid-medium uk-child-width-1-3 uk-text-center uk-grid-match" uk-grid="true">
                    <div>
                        <div className="uk-card uk-card-body">
                            <article className="uk-article">

                                <img width="80" alt="" uk-img={iconos08} uk-svg="true"></img>

                                <h1 className="uk-article-title"><Link className="uk-link-reset" to="">Business Skills</Link></h1>

                                <p>Any skilled software developer can develop
                                software applications, but a great software
                                developer is the one who apart from mastering
                                the skills, also understands the business
                                signicance of the software application. This
                                last feature is what we search in our employees.</p>

                            </article>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card-body">
                            <article className="uk-article">

                                <img width="100" alt="" uk-img={iconos09} uk-svg="true"></img>

                                <h1 className="uk-article-title"><Link className="uk-link-reset" to="">Zeal to Keep Learning</Link></h1>

                                <p>Collaboration and support is critical to how
                                we develop as a team and it is the backbone
                                of what makes us great. It does not matter if
                                we are in dierent locations, what matters is
                                that we work as a global team.</p>

                            </article>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card-body">
                            <article className="uk-article">

                                <img width="100" alt="" uk-img={iconos10} uk-svg="true"></img>

                                <h1 className="uk-article-title"><Link className="uk-link-reset" to="">Communication Skills</Link></h1>

                                <p>It is very important for ITSystems that all of
                                our employee are able to explain the information
                                clearly to their managers, other
                                co-workers, and clients, and should also be
                                able to work collaboratively with them to
                                achieve results.</p>

                            </article>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
