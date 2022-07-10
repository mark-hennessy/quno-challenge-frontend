import { PropsWithChildren } from "react";
import { Doctor } from "../@types/Doctor";
import AddressLabel from "./addressLabel";
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
    </section>
  );
}
