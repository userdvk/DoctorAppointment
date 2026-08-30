import { useParams } from "react-router-dom";
import { PageContainer } from "../../components/layout/PageContainer/PageContainer";
import useDoctors from "../../hooks/useDoctors";
import cls from "./AppointmentDetailes.module.css";
import { IoChatbubbleOutline } from "react-icons/io5";
import { AppCalendar } from "../../components/features/AppCalendar/AppCalendar";

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
            <div className={cls.price}>$120.00</div>
          </div>
        </div>
      </div>

      <div className={cls.details}>
        <span className={cls.detailsName}>Details</span>
        <p>
          Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis. Ut commodo efficitur neque. Ut diam quam, semper iaculis
          condimentum ac, vestibulum eu nisl.
        </p>
      </div>

      <AppCalendar
        calendarType="iso8601"
        locale="en-US"
        formatShortWeekday={(locale, date) =>
          ["M", "T", "W", "T", "F", "S", "S"][
            date.getDay() === 0 ? 6 : date.getDay() - 1
          ]
        }
      />
    </PageContainer>
  );
}
