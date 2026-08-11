import cls from "./DoctorCard.module.css";
import doctor from "../../assets/doctor.png";
export default function DoctorCard() {
  return (
    <div className={cls.card}>
      <div className={cls.photo}>
        <img src={doctor} />
      </div>
      <div className={cls.info}>
        <span className={cls.name}>Dr.Pawan</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          corporis, iste unde ipsum dolore iure perspiciatis asperiores
        </p>
      </div>
    </div>
  );
}
