import { HashLink as Link } from 'react-router-hash-link';

export const ChooseServices = () => {
  return (
    <>
      <div className="uk-container uk-container-small">
        <div className="uk-container uk-padding">
          <div className="uk-grid-small uk-child-width-expand@s" uk-grid="true">
            <div>
              <div className="uk-text-capitalize uk-text-large uk-text-center uk-text-bold uk-raleway">
                WHY CHOOSE OUR SERVICES
                <hr className="uk-divider divider"></hr>
              </div>
              <div className="uk-margin-medium-top">
                <p>
                  We can start by telling you how proud we are about our problem
                  solving skills and outcomes, and how much we care for our
                  clients, the
                  <br />
                  <b>
                    high quality work we offer, and how committed we are, and
                    all the follow-ups we do
                  </b>
                </p>

                <p>
                  But we are sure you probably heard or read this before from
                  other companies. So, why don’t you hear it from our clients
                  yourself? We can connect you with them so you can ask about
                  our work if you need to.
                </p>
              </div>
              <div className="uk-grid-small uk-child-width-auto" uk-grid="true">
                <div>
                  <Link
                    smooth
                    to="/contact#top"
                    className="uk-button uk-button-default button-resize"
                  >
                    L E T ` S TALK
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
