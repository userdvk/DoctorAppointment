import cls from "./SocialAuth.module.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

export function SocialAuth() {
  return (
    <div className={cls.socialAuthWrapper}>
      <span>OR</span>
      <div className={cls.icons}>
        <FcGoogle size={"60px"} className={cls.icon} />
        <FaFacebook
          size={"60px"}
          className={`${cls.icon} ${cls.iconspace}`}
          color="#1877F2"
        />
      </div>
    </div>
  );
}
