import { Doctor } from "../@types/Doctor";
import { DOCTOR_LIST_TEST_ID } from "../constants/testIds";
import DoctorListItem from "./doctorListItem";

type Props = {
  doctors: Doctor[];
};

export default function DoctorList({ doctors }: Props) {
  return (
    <section className="px-5">
      <ul data-testid={DOCTOR_LIST_TEST_ID}>
        {doctors.map((doctor) => {
          return <DoctorListItem key={doctor.slug} doctor={doctor} />;
        })}
      </ul>
    </section>
  );
}
