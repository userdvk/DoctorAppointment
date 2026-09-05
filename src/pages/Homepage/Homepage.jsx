import { ProfileHeader } from "../../components/features/ProfileHeader/ProfileHeader";
import cls from "./Homepage.module.css";
import { Search } from "../../components/ui/Search/Search";
import { Slider } from "../../components/ui/Slider/Slider";
import ContentWrapper from "../../components/layout/ContentWrapper/ContentWrapper";
import DoctorList from "../../components/features/DoctorList/DoctorList";
import { useState } from "react";
import { CategoriesSlider } from "../../components/features/CategoriesSlider/CategoriesSlider";

export function Homepage() {
  const [serchQuery, setSerchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  console.log(activeCategory);

  return (
    <div className={cls.homeWrapper}>
      <ProfileHeader />
      <Search setSerchQuery={setSerchQuery} />
      <Slider />
      <ContentWrapper title={"Categories"}>
        <CategoriesSlider
          setActiveCategory={setActiveCategory}
          activeCategory={activeCategory}
        />
      </ContentWrapper>
      <ContentWrapper title="All Doctors">
        <DoctorList serchQuery={serchQuery} activeCategory={activeCategory} />
      </ContentWrapper>
    </div>
  );
}
