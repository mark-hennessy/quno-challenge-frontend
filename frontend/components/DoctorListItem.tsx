import { PropsWithChildren } from "react";
import { Doctor } from "../@types/Doctor";
import { getAmountWithCounterWord } from "../utils/string";
import Icon from "./icon";

type Props = {
  doctor: Doctor;
};

function DoctorHighlight({ children }: PropsWithChildren<{}>) {
  return <li className="flex items-start">{children}</li>;
}

export default function DoctorListItem({ doctor }: Props) {
  return (
    <li
      className="grid gap-x-6 gap-y-4"
      style={{ gridTemplateColumns: "auto 1fr" }}
    >
      <img className="w-24 h-24" src={doctor.avatarUrl} alt="avatar" />
      <div>
        <div className="text-xs leading-5 text-trueGray-700 font-bold uppercase mb-1">
          Hair Transplant
        </div>
        <div className="text-2xl leading-7 text-cyan-900 mb-2">
          {doctor.name}
        </div>
        <div className="flex items-center">
          <Icon name="map-outline.svg" alt="address" size="xs" />
          <span className="text-xs leading-5 text-trueGray-700">
            {[doctor.city, doctor.country].join(", ")}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div>{doctor.qunoScoreNumber}</div>
        <div className="text-xs leading-5 text-black font-bold">
          {doctor.qunoScoreText}
        </div>
        <div className="text-xs leading-4 text-trueGray-700 uppercase">
          Qunoscore
        </div>
      </div>
      <ul>
        <DoctorHighlight>
          <Icon name="star.svg" alt="star icon" size="sm" />
          <div>({doctor.reviews.length} reviews)</div>
        </DoctorHighlight>
        <DoctorHighlight>
          <Icon name="check.svg" alt="checkmark" size="sm" />
          <div>
            {getAmountWithCounterWord(doctor.treatmentsLastYear, "treatment")}{" "}
            last year
          </div>
        </DoctorHighlight>
        <DoctorHighlight>
          <Icon name="check.svg" alt="checkmark" size="sm" />
          <div>
            {getAmountWithCounterWord(doctor.yearsExperience, "year")} of
            experience
          </div>
        </DoctorHighlight>
      </ul>
      <div>TODO</div>
      <div>TODO</div>
    </li>
  );
}
