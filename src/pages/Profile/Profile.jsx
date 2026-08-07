import cls from "./Profile.module.css";
import Ellipse from "../../assets/Ellipse.png";
import { ProfileMenuItem } from "../../components/ProfileMenuItem/ProfileMenuItem";

import { IoIosLogOut } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { PageContainer } from "../../components/PageContainer/PageContainer";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export function Profile() {
  const user = useContext(AuthContext);

  const HandleLogout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();
  return (
    <>
      <PageContainer title={"Profile"}>
        <img src={Ellipse} className={cls.profileImage} />
        <span className={cls.profileSpan}>{user.name}</span>

        <div>
          <ProfileMenuItem
            text={"Personal Detailes"}
            icon={<FaRegUserCircle color="#0B8FAC" size="24px" />}
            onClick={() => navigate("/PersonalDetails")}
          />

          <ProfileMenuItem
            text={"Logout"}
            icon={<IoIosLogOut color="#0B8FAC" size="24px" />}
            onClick={HandleLogout}
          />
        </div>
      </PageContainer>
    </>
  );
}
