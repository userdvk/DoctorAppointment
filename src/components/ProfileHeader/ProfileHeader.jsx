import cls from "./ProfileHeader.module.css";

import Ellipse from "../../assets/Ellipse.png";
import Notification from "../../assets/Notification.png";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export function ProfileHeader() {
  const navigate = useNavigate();
  const user = useContext(AuthContext);

  return (
    <div className={cls.wrapper}>
      <div className={cls.photo} onClick={() => navigate("/PersonalDetails")}>
        <img src={Ellipse} />
      </div>
      <div className={cls.GreetingText}>
        <p>Hi,Welcome Back,</p>
        <span>{user.name}</span>
      </div>

      <div className={cls.notification}>
        <img src={Notification} />
      </div>
    </div>
  );
}
