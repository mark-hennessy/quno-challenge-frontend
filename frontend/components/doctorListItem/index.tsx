import classNames from "classnames";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { Doctor } from "../../@types/Doctor";
import { formatCurrency } from "../../utils/currency";
import { getAmountWithCounterWord } from "../../utils/string";
import AddressLabel from "../addressLabel";
import CircularProgressIndicator from "../circularProgressIndicator";
import Icon from "../icon";
import styles from "./index.module.css";

type Props = {
  doctor: Doctor;
};

function DoctorHighlight({ children }: PropsWithChildren<{}>) {
  return <li className="flex items-start mb-1">{children}</li>;
}

export default function DoctorListItem({ doctor }: Props) {
  return (
    <li
      className={classNames("grid gap-x-6 gap-y-4", styles["doctor-list-item"])}
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
        <AddressLabel doctor={doctor} />
      </div>
      <div className="flex flex-col items-center">
        <CircularProgressIndicator
          className="mb-2"
          value={doctor.qunoScoreNumber}
          maxValue={10}
          text={doctor.qunoScoreNumber}
        />
        <div className="text-base leading-5 font-bold">
          {doctor.qunoScoreText}
        </div>
        <div className="text-xs leading-4 text-trueGray-700 uppercase">
          Qunoscore
        </div>
      </div>
      <ul>
        <DoctorHighlight>
          <Icon name="star.svg" alt="star icon" size="sm" />
          <div>
            <span className="font-bold">{doctor.ratingsAverage}</span> (
            {doctor.reviews.length} reviews)
          </div>
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
      {/* sizer row, first column */}
      <div className="mb-4" />
      {/* sizer row, second column */}
      <div />
      <div className="text-center">
        <div className="text-xs leading-5">starting from</div>
        <div className="text-xs leading-5 font-bold">
          {formatCurrency(doctor.basePrice)}
        </div>
      </div>
      <div>
        <Link href={`/doctors/${encodeURIComponent(doctor.slug)}`}>
          <a className="flex items-center justify-center w-full h-10 border rounded-md border-cyan-900 text-cyan-900 text-sm leading-4">
            See doctor profile
          </a>
        </Link>
      </div>
    </li>
  );
}
