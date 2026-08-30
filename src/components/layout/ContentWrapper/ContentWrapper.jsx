import cls from "./ContentWrapper.module.css";
export default function ContentWrapper({ title, children }) {
  return (
    <>
      <div className={cls.doctorTitle}>
        <span className={cls.title}>{title}</span>
        <span className={cls.seeAll}>See All</span>
      </div>
      {children}
    </>
  );
}
