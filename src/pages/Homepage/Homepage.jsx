import { ProfileHeader } from "../../components/ProfileHeader/ProfileHeader";
import cls from "./Homepage.module.css";
import { Search } from "../../components/Search/Search";
import { Slider } from "../../components/Slider/Slider";

export function Homepage() {
  return (
    <div className={cls.homeWrapper}>
      <ProfileHeader />
      <Search />
      <Slider />
      <br />
    </div>
  );
}
