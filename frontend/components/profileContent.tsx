import { PropsWithChildren } from "react";
import { Doctor } from "../@types/Doctor";
import AddressLabel from "./addressLabel";
import CircularProgressIndicator from "./circularProgressIndicator";
import Icon from "./icon";

type Props = {
  doctor: Doctor;
};

export default function ProfileContent({ doctor }: Props) {
  return (
    <section className="px-5 py-8 bg-cyan-900">
      <div className="text-sm leading-4 text-amber-300 font-bold uppercase">
        Hair Transplant
      </div>
      <h1 className="font-sans text-4xl leading-10 text-white mb-2">
        {doctor.name}
      </h1>
      <AddressLabel doctor={doctor} hasDarkBackground />
      <div className="mt-10 mb-5 flex items-center">
        <CircularProgressIndicator
          className="mr-3"
          value={doctor.qunoScoreNumber}
          maxValue={10}
          text={doctor.qunoScoreNumber}
          hasDarkBackground
        />
        <div>
          <div className="text-base leading-6 font-bold text-amber-300">
            {doctor.qunoScoreText}
          </div>
          <div className="text-xs leading-4 text-trueGray-300 uppercase">
            Qunoscore
          </div>
        </div>
      </div>
    </section>
  );
}
