import mobile from "../../assets/mobile.jpg";
import banner03 from "../../assets/sliders-05.jpg";

export const CarouselHome = () => {
  return (
    <div
      className="uk-position-relative uk-visible-toggle uk-light"
      uk-slideshow="true; animation: fade; min-height: 300; max-height: 500"
    >
      <ul className="uk-slideshow-items">
        <li>
          <img src={banner03} className="uk-visible@s" alt="" uk-cover="true" />
          <img src={mobile} className="uk-hidden@s" alt="" uk-cover="true" />
        </li>
      </ul>
    </div>
  );
};
