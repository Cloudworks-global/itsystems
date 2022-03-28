import banner01 from "../../assets/award.png";
import banner02 from "../../assets/award01.png";

export const AwardsReview = () => {
  return (
    <div>
      <div className="uk-container uk-container-small">
        <div className="uk-container uk-padding">
          <div
            className="uk-grid-small uk-child-width-expand@s uk-text-center"
            uk-grid="true"
          >
            <div>
              <div className="uk-text-capitalize uk-text-large uk-text-center uk-text-bold uk-raleway">
                AWARDS
                <hr className="uk-divider divider01"></hr>
              </div>
            </div>
          </div>

          <div
            className="uk-grid-small uk-child-width-expand@s uk-text-center"
            uk-grid="true"
          >
            <div>
              <div className="uk-text-center uk-text-bold uk-padding-small">
                <p>
                  Clutch recognizes ITSystems as Uruguay’s Leading Software
                  Developer for 2020 and 2021!
                </p>
              </div>
            </div>
          </div>

          <div
            className="uk-grid-collapse uk-flex uk-flex-center uk-flex-middle"
            uk-grid="true"
          >
            <div className="uk-width-1-3@m">
              <div className="uk-padding-small uk-light uk-visible@m uk-text-center">
                <img
                  src={banner01}
                  width={"70%"}
                  alt=""
                  className="uk-margin"
                />
              </div>
            </div>
            <div className="uk-width-expand@m">
              <p>
                Since 2010, ITSystems has made its mark here in Montevideo,
                Uruguay for its top-notch software development services. We are
                an award-winning Microsoft Gold Certified Partner that partners
                with various clients from all over the world. For us, our
                clients’ success is our success. We value their goals more than
                anything else, that’s why when we found out about this news, we
                were beyond excited.
              </p>

              <p>
                Most recently, Clutch named ITSystems as Uruguay’s
                highest-ranking software development company for 2021!
              </p>

              <p>
                To give context, Clutch is a B2B platform that’s widely known
                for its massive collection of client reviews and ratings. Every
                year, the site goes through a meticulous selection process to
                find the best and brightest service providers from different
                industries and locations.
              </p>

              <p>
                Considering that this award was made possible thanks to the
                amazing reviews of our clients, we couldn’t be more grateful.
              </p>

              <p className="uk-text-bold">
                “We are grateful to Clutch for choosing us to collect this
                award. Thank you so much for this award.” — Andrés Barreiro,
                Chief Executive Officer of ITSystems
              </p>

              <p>
                Big thanks to all our clients for making this possible,
                especially to those who provided us with their gracious reviews
                on the platform! We dedicate this remarkable achievement to the
                incredible projects and people we’ve had the pleasure of working
                with.
              </p>

              <p>
                Without our clients’ reviews, our company would not have been
                able to reach such a feat. ITSystems is definitely proud to be a
                five-star company thanks to their support!
              </p>

              <p>
                We go the extra mile for our clients! See it for yourself.
                ITSystems is excited to meet you. Don’t hesitate to reach out
                and let’s connect.
              </p>

              <p>
                We couldn’t be more excited. Clutch’s robust team of researchers
                examines hundreds of software developers before selecting only
                the very best. We’ve made it to the top!
              </p>
            </div>
          </div>

          <br/>
          <hr className="uk-divider divider01"></hr>
          <br/>

          <div
            className="uk-grid-collapse uk-flex uk-flex-center uk-flex-middle uk-margin-bottom"
            uk-grid="true"
          >
            <div className="uk-width-expand@m">
              <p>
                Outsourcing software development isn’t always easy. Whether you’re
                a startup looking to further develop a prototype or an enterprise
                trying to modernize your CRM system, you face the task of finding
                a competent provider to pull the project off.
              </p>

              <p>
                When we’re living in a gig economy that’s developers and
                development houses galore, this is easier said than done. How is
                one expected to navigate such a saturated market? It’s a daunting
                challenge, especially when your time and money are at stake.
              </p>

              <p>
                Great question! That’s where customer reviews really count. Client
                testimonials have the power to validate the legitimacy of
                providers like ourselves, proving that we’re a skilled partner
                capable of tackling your next project.
              </p>

              <p>
                We have countless clients who can attest to our development
                skills. In fact, we’re leaders in the industry. You’ll find our
                client’s rave reviews on Clutch, a robust ratings and reviews
                platform that seeks to guide you in your outsourcing process.
              </p>

              <p>
                Even more exciting — we’re proud to announce that we’ve made it
                onto Clutch’s list of top 2020 leaders in Uruguay!
              </p>

              <p>
                We couldn’t be more excited. Clutch’s robust team of researchers
                examines hundreds of s oftware developers before selecting only
                the very best. We’ve made it to the top!
              </p>

              <p>
                Here at ITSystems, we’ve worked since 2011 to create cutting-edge
                solutions for the international market. On top of being a
                Microsoft Gold certified partner, we’re experts in sharing your
                business vision. We’ll work with you, side by side — eliminating
                any traditional notion of a vendor-client relationship.
              </p>
            </div>
            <div className="uk-width-1-3@m">
              <div className="uk-padding-small uk-light uk-visible@m uk-text-center">
                <img
                  src={banner02}
                  width={"70%"}
                  alt=""
                  className="uk-margin"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
