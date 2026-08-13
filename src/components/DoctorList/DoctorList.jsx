import useDoctors from "../../hooks/UseDoctors";
import DoctorCard from "../DoctorCard/DoctorCard";
export default function DoctorList() {
  const [doctors] = useDoctors();

  return doctors.map((doctor) => {
    return <DoctorCard key={doctor.id} {...doctor} />;
  });
}
