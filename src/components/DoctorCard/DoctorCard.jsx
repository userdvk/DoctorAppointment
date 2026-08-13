import cls from "./DoctorCard.module.css";
import doctor from "../../assets/doctor.png";
import { FaStar } from "react-icons/fa";

import { ButtonCard } from "../ButtonCard/ButtonCard";
export default function DoctorCard({ name, description, photo, rating }) {
  return (
    <div className={cls.card}>
      <div className={cls.photo}>
        <img src={doctor} />
      </div>
      <div className={cls.info}>
        <span className={cls.name}>{name}</span>
        <p>{description}</p>
        <div className={cls.buttonWrap}>
          <ButtonCard>Book</ButtonCard>
          <div className={cls.rating}>
            <FaStar color="#F89603" />
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
