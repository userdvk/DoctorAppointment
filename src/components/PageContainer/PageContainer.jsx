import cls from "./PageContainer.module.css";
export function PageContainer({ title, children }) {
  return (
    <div className={cls.wrapper}>
      <h5 className={cls.title}>{title}</h5>
      {children}
    </div>
  );
}
