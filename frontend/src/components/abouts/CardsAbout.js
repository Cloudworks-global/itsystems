import { Link } from 'react-router-dom'

import iconos06 from '../../assets/SEGUNDA-09.png'
import iconos07 from '../../assets/SEGUNDA-10.png'
import iconos08 from '../../assets/SEGUNDA-11.png'
import iconos09 from '../../assets/SEGUNDA-12.png'
import iconos10 from '../../assets/SEGUNDA-13.png'

export const CardsAbout = () => {
    return (
        <>
            <div className='uk-container uk-padding'>

                <div className="uk-grid-small uk-child-width-expand@s" uk-grid="true">
                    <div>
                        <div className='uk-text-capitalize uk-padding uk-text-large uk-text-center uk-text-bold'>
                            OUR PROFESSIONAL SKILLS
                        </div>
                    </div>
                </div>

                <div className="uk-grid-medium uk-child-width-1-1@s uk-child-width-1-2@m uk-text-center uk-grid-match" uk-grid="true">
                    <div>
                        <div class="uk-card">
                            <div class="uk-card-media-top">
                                <img width="80" alt="" src={iconos06} ></img>
                            </div>
                            <div class="uk-card-body">
                                <h2 class="uk-card-title uk-text-bold">Technical Knowledge</h2>
                                <p>Staying updated with the latest technology
                                trends is essential for ITSystems. All of our
                                developers should also remain asexible to
                                learn new tools and technologies as per the
                                work requirement and changing trends.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="uk-card">
                            <div class="uk-card-media-top">
                                <img width="70" alt="" src={iconos07}></img>
                            </div>
                            <div class="uk-card-body">
                                <h2 class="uk-card-title uk-text-bold">Problem Solving Skills</h2>
                                <p>We must be aware of the fact that the main
                                thesis of software development is "solving
                                some kind of problem". Software
                                development provides the solution to that
                                problem. This is a condition that all of our
                                employees must have.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="uk-grid-medium uk-child-width-1-1@s uk-child-width-1-3@m uk-text-center uk-grid-match" uk-grid="true">
                    <div>
                        <div class="uk-card">
                            <div class="uk-card-media-top">
                                <img width="80" alt="" src={iconos08} ></img>
                            </div>
                            <div class="uk-card-body">
                                <h2 class="uk-card-title uk-text-bold">Business Skills</h2>
                                <p>Any skilled software developer can develop
                                software applications, but a great software
                                developer is the one who apart from mastering
                                the skills, also understands the business
                                signiuscance of the software application. This
                                last feature is what we search in our employees.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="uk-card">
                            <div class="uk-card-media-top">
                                <img width="80" alt="" src={iconos09} ></img>
                            </div>
                            <div class="uk-card-body">
                                <h2 class="uk-card-title uk-text-bold">Zeal to Keep Learning</h2>
                                <p>Collaboration and support is critical to how
                                we develop as a team and it is the backbone
                                of what makes us great. It does not matter if
                                we are in dieserent locations, what matters is
                                that we work as a global team.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div class="uk-card">
                            <div class="uk-card-media-top">
                                <img width="80" alt="" src={iconos10} ></img>
                            </div>
                            <div class="uk-card-body">
                                <h2 class="uk-card-title uk-text-bold">Communication Skills</h2>
                                <p>It is very important for ITSystems that all of
                                our employee are able to explain the information
                                clearly to their managers, other
                                co-workers, and clients, and should also be
                                able to work collaboratively with them to
                                achieve results.</p>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </>
    )
}
