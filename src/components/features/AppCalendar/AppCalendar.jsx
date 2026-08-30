import cls from "./AppCalendar.module.css";
import Calendar from "react-calendar";

export function AppCalendar() {
  return (
    <div className={cls.calendarWrap}>
      <Calendar />
    </div>
  );
}
