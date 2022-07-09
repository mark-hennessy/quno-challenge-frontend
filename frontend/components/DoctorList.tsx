import { Doctor } from "../@types/Doctor";
import DoctorListItem from "./doctorListItem";

type Props = {
  doctors: Doctor[];
};

export default function DoctorList({ doctors }: Props) {
  return (
    <section className="px-5">
      <ul>
        {doctors.map((doctor) => {
          return <DoctorListItem key={doctor.slug} doctor={doctor} />;
        })}
      </ul>
    </section>
  );
}
