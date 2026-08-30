import { useContext, useState } from "react";
import { Button } from "../../ui/Button/Button";
import cls from "./AppCalendar.module.css";
import Calendar from "react-calendar";
import { AuthContext } from "../../../context/AuthContext";
import { arrayUnion, doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { useParams } from "react-router-dom";

export function AppCalendar() {
  const user = useContext(AuthContext);
  const { id } = useParams();

  const [pickDate, setDate] = useState(null);

  const setAppointment = async () => {
    if (!user) return;

    try {
      await setDoc(
        doc(db, "doctorsList", id),
        {
          appointments: arrayUnion({
            pickDate: pickDate,
            userId: user.uid,
            user: user.name,
          }),
        },
        { merge: true },
      );

      console.log("Has been updated");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className={cls.calendarWrap}>
        <Calendar
          view="month"
          minDetail="month"
          maxDetail="month"
          onChange={(date) => setDate(date)}
          value={pickDate}
        />
      </div>

      <Button onClick={setAppointment}>Set Appointment</Button>
    </>
  );
}
