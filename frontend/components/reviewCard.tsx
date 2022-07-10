import { Review } from "../@types/Review";
import Icon from "./icon";

type Props = {
  review: Review;
};

function getStars(count: number) {
  const stars: JSX.Element[] = [];
  for (let i = 0; i < count; i++) {
    stars.push(
      <Icon
        key={i}
        className="mr-1"
        name="star.svg"
        alt="star icon"
        size="sm"
        fitted
      />
    );
  }

  return stars;
}

export default function ReviewCard({ review }: Props) {
  return (
    <li
      className="p-6 rounded-lg"
      style={{
        width: "309px",
        height: "479px",
        boxShadow: "0px 2px 6px 0px #48484833",
      }}
    >
      <div>
        <div className="text-xl leading-6 text-cyan-900 font-bold">
          {review.patientName}
        </div>
        <div className="text-base leading-5 text-cyan-900">
          {review.country}
        </div>
        <div className="mb-5">{getStars(5)}</div>
      </div>
      <div className="text-base leading-6">
        <div className="font-bold">{review.headline}</div>
        <div>{review.content}</div>
      </div>
    </li>
  );
}
