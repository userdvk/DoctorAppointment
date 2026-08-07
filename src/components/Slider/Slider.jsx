import cls from "./Slider.module.css";
import slider from "../../assets/slider.png";
export function Slider() {
  return (
    <div className={cls.wrapper}>
      <img src={slider} />
    </div>
  );
}
