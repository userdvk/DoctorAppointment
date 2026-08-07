import logo from "../../assets/Logo.png";
import cls from "./Loader.module.css";

export function Loader() {
  return (
    <div className={cls.loader}>
      <img src={logo} />
    </div>
  );
}
