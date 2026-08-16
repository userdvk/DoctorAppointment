import cls from "./DoctorCard.module.css";
import { FaStar } from "react-icons/fa";

import { ButtonCard } from "../ButtonCard/ButtonCard";
import { Link } from "react-router-dom";
export default function DoctorCard({ name, description, photo, rating, id }) {
  return (
    <div className={cls.card}>
      <div className={cls.photo}>
        <img src={photo} />
      </div>
      <div className={cls.info}>
        <span className={cls.name}>{name}</span>
        <p>{description}</p>
        <div className={cls.buttonWrap}>
          <Link to={`/doctor/${id}`}>
            <ButtonCard>Book</ButtonCard>
          </Link>
          <div className={cls.rating}>
            <FaStar color="#F89603" />
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
