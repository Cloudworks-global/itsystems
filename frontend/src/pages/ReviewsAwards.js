import { HeaderReviews } from "../components/reviews/HeaderReviews";
import { RewiesReview } from "../components/reviews/RewiesReview";
import { AwardsReview } from "../components/reviews/AwardsReview";

export const ReviewsAwards = () => {
  return (
    <div id="top">
      <HeaderReviews />
      <RewiesReview />
      <AwardsReview />
    </div>
  );
};
