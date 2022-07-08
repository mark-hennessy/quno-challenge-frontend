import { Doctor } from "../@types/Doctor";

type Props = {
  doctor: Doctor;
};

export default function DoctorListItem({ doctor }: Props) {
  return <li>{doctor.name}</li>;
}
