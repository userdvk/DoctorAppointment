import useDoctors from "../../hooks/useDoctors";
import DoctorCard from "../DoctorCard/DoctorCard";
export default function DoctorList({ serchQuery }) {
  const [doctors] = useDoctors();

  const filteredDoctor = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(serchQuery.toLowerCase()),
  );

  return filteredDoctor.map((doctor) => {
    return <DoctorCard key={doctor.id} {...doctor} />;
  });
}
