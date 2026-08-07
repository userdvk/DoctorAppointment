import { Outlet } from "react-router-dom";
// import Iphone from "../../assets/iPhonebar.png";

import { BottomMenu } from "../BottomMenu/BottomMenu";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
export function MainLayout() {
  const user = useContext(AuthContext);

  return (
    <div className="app-background">
      <div className="app-container">
        {/* <img src={Iphone} /> */}
        <Outlet />
        {/* Что бы меню не показывалось если юзер не
        авторизован */}
        {user ? <BottomMenu /> : ""}
      </div>
    </div>
  );
}
