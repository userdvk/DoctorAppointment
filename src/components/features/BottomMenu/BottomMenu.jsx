import cls from "./BottomMenu.module.css";
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoMdTime } from "react-icons/io";
import { TbMessageDots } from "react-icons/tb";

import { NavLink } from "react-router-dom";

export function BottomMenu() {
  const navItem = [
    { path: "/", icon: <IoHomeOutline size={24} /> },
    { path: "/Appointment", icon: <IoMdTime size={24} /> },
    { path: "/messeger", icon: <TbMessageDots size={24} /> },

    { path: "/profile", icon: <CgProfile size={24} /> },
  ];
  return (
    <div className={cls.bottomMenu}>
      {navItem.map((item, index) => {
        return (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `${cls.menuItem} ${isActive ? cls.active : ""}`
            }
          >
            {item.icon}
          </NavLink>
        );
      })}
    </div>
  );
}
