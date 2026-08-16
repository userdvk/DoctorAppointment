import { ProfileHeader } from "../../components/ProfileHeader/ProfileHeader";
import cls from "./Homepage.module.css";
import { Search } from "../../components/Search/Search";
import { Slider } from "../../components/Slider/Slider";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import DoctorList from "../../components/DoctorList/DoctorList";
import { useState } from "react";

export function Homepage() {
  const [serchQuery, setSerchQuery] = useState("");

  return (
    <div className={cls.homeWrapper}>
      <ProfileHeader />
      <Search setSerchQuery={setSerchQuery} />
      <Slider />
      <ContentWrapper title="All Doctors">
        <DoctorList serchQuery={serchQuery} />
      </ContentWrapper>
    </div>
  );
}
