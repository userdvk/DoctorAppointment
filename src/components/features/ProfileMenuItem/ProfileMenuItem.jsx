import { FiChevronRight } from "react-icons/fi";
import cls from "./ProfileMenuItem.module.css";

export function ProfileMenuItem({ icon, text, onClick }) {
  return (
    <div className={cls.menuItem} onClick={onClick}>
      <div className={cls.iconWrap}>{icon}</div>

      <span className={cls.menuItemSpan}>{text}</span>

      <FiChevronRight size="24px" color="#858585" />
    </div>
  );
}
