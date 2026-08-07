import { PageContainer } from "../../../components/PageContainer/PageContainer";
import Ellipse from "../../../assets/Ellipse.png";
import cls from "./PersonalDetails.module.css";

import { EditableField } from "../../../components/EditableField/EditableField";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { BsCalendar2Date } from "react-icons/bs";
import { Button } from "../../../components/Button/Button";
import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";

export function PersonalDetails() {
  const user = useContext(AuthContext);

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (user) {
      reset({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        dateOfBirth: user.dateOfBirth || "",
      });
    }
  }, [user, reset]);

  const onSubmit = async (data) => {
    if (!user) return;
    try {
      await setDoc(
        doc(db, "users", user.uid),
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          dateOfBirth: data.dateOfBirth,
        },
        { merge: true },
      );

      console.log("User has been updated");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <PageContainer title={"Personal Details"}>
      <img src={Ellipse} className={cls.profileImage} />

      <form
        className={cls.PersonalDetailsFrom}
        onSubmit={handleSubmit(onSubmit)}
      >
        <EditableField
          text={user.name}
          {...register("name")}
          icon={<FaRegUserCircle color="#0B8FAC" size="24px" />}
        />

        <EditableField
          text={user.email}
          {...register("email")}
          type={"email"}
          icon={<MdOutlineAlternateEmail color="#0B8FAC" size="24px" />}
        />

        <EditableField
          type={"phone"}
          text={user.phone}
          {...register("phone")}
          icon={<MdOutlinePhone color="#0B8FAC" size="24px" />}
        />

        <EditableField
          type={"date"}
          text={user.dateOfBirth}
          {...register("dateOfBirth")}
          icon={<BsCalendar2Date color="#0B8FAC" size="24px" />}
        />
        <Button>Save Changes</Button>
      </form>
    </PageContainer>
  );
}
