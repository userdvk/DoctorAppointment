import { useParams } from "react-router-dom";
import { PageContainer } from "../../components/PageContainer/PageContainer";
import useDoctors from "../../hooks/useDoctors";

export default function AppointmentDetailes() {
  const { id } = useParams();

  const [doctors] = useDoctors();

  const doctor = doctors.find((item) => item.id === id);
  console.log(doctor);

  return <PageContainer title={"Appointment"} showBackButton></PageContainer>;
}
