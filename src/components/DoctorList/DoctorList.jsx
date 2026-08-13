import DoctorCard from "../DoctorCard/DoctorCard";
import cls from "./DoctorList.module.css";

export default function DoctorList() {
  return (
    <div className={cls.listWrapper}>
      <DoctorCard />
      <DoctorCard />
      <DoctorCard />
      <DoctorCard />
    </div>
  );
}
