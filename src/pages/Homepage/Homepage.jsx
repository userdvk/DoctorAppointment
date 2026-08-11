import { ProfileHeader } from "../../components/ProfileHeader/ProfileHeader";
import cls from "./Homepage.module.css";
import { Search } from "../../components/Search/Search";
import { Slider } from "../../components/Slider/Slider";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import DoctorList from "../../components/DoctorList/DoctorList";

export function Homepage() {
  return (
    <div className={cls.homeWrapper}>
      <ProfileHeader />
      <Search />
      <Slider />
      <ContentWrapper title="All Doctors">
        <DoctorList />
      </ContentWrapper>
    </div>
  );
}
