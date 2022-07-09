import { PropsWithChildren } from "react";
import { Doctor } from "../@types/Doctor";
import Icon from "./icon";

type Props = {
  doctor: Doctor;
};

function DoctorListItemRow({ children }: PropsWithChildren<{}>) {
  return (
    <div
      className="grid grid-flow-col gap-6"
      style={{ gridTemplateColumns: "auto 1fr" }}
    >
      {children}
    </div>
  );
}

function DoctorHighlight({ children }: PropsWithChildren<{}>) {
  return <li className="flex items-start">{children}</li>;
}

export default function DoctorListItem({ doctor }: Props) {
  return (
    <li className="grid gap-4">
      <DoctorListItemRow>
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
      </DoctorListItemRow>
      <DoctorListItemRow>
        <div>
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
        </ul>
      </DoctorListItemRow>
      <DoctorListItemRow>
        <div>TODO</div>
      </DoctorListItemRow>
    </li>
  );
}
