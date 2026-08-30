import cls from "./ButtonCard.module.css";

export function ButtonCard({ children }) {
  return (
    <button className={cls.btn} type="submit">
      {children}
    </button>
  );
}
