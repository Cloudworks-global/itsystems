import banner01 from "../../assets/sliders-07.jpg";
import banner02 from "../../assets/sliders-06.jpg";
import banner03 from "../../assets/sliders-05.jpg";

export const CarouselHome = () => {
  return (
    <div
      className="uk-position-relative uk-visible-toggle uk-light"
      uk-slideshow="true; animation: fade; min-height: 300; max-height: 500"
    >
      <ul className="uk-slideshow-items">
        <li>
          <img src={banner03} alt="" uk-cover="true" />
        </li>
      </ul>
    </div>
  );
};
