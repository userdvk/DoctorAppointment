import useDoctors from "../../../hooks/useDoctors";
import DoctorCard from "../DoctorCard/DoctorCard";
export default function DoctorList({ serchQuery, activeCategory }) {
  const [doctors] = useDoctors();

  const filteredCategory = doctors.filter((doc) => {
    if (activeCategory === "All") {
      return true;
    }

    return doc.category?.toLowerCase().includes(activeCategory.toLowerCase());
  });

  const filteredDoctor = filteredCategory.filter((doctor) =>
    doctor.name?.toLowerCase().includes(serchQuery.toLowerCase()),
  );

  return filteredDoctor.map((doctor) => {
    return <DoctorCard key={doctor.id} {...doctor} />;
  });
}
