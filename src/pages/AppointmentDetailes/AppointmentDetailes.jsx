import { useParams } from "react-router-dom";
import { PageContainer } from "../../components/PageContainer/PageContainer";
import useDoctors from "../../hooks/useDoctors";
import cls from "./AppointmentDetailes.module.css";
import { IoChatbubbleOutline } from "react-icons/io5";

export default function AppointmentDetailes() {
  const { id } = useParams();

  const [doctors, loading] = useDoctors();

  const doctor = doctors.find((item) => item.id === id);
  console.log(doctor);

  if (loading) {
    return (
      <PageContainer title={"Appointment"} showBackButton>
        <div>Загрузка...</div>
      </PageContainer>
    );
  }

  return (
    <PageContainer title={"Appointment"} showBackButton>
      <div className={cls.header}>
        <div className={cls.photo}>
          <img src={`/${doctor.photo}`} />
        </div>

        <div className={cls.nameWrap}>
          <div className={cls.name}>
            {doctor.name}
            <div className={cls.chatBtn}>{<IoChatbubbleOutline />}</div>
          </div>

          <span className={cls.status}>denteeth</span>

          <div className={cls.payment}>
            <div>Payment</div>
            <div>$120.00</div>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
