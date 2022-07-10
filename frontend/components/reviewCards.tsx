import { Review } from "../@types/Review";
import ReviewCard from "./reviewCard";

type Props = {
  reviews: Review[];
};

export default function ReviewCards({ reviews }: Props) {
  return (
    <ul className="grid grid-flow-col gap-6 py-5 pl-5 overflow-x-scroll">
      {[...reviews]
        // TODO: extract util for ISO date sorting and add unit tests
        .sort((r1, r2) => Date.parse(r2.date) - Date.parse(r1.date))
        .map((review) => {
          return (
            <ReviewCard
              key={review.date + review.patientName}
              review={review}
            />
          );
        })}
    </ul>
  );
}
