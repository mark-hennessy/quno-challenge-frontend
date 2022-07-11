import { Doctor } from "../@types/Doctor";

type Props = {
  doctor: Doctor;
};

export default function DoctorImageGallery({ doctor }: Props) {
  return (
    <section>
      <img
        className="w-full h-56 object-cover"
        src={doctor.avatarUrl}
        alt="avatar"
      />
    </section>
  );
}
