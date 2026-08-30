import cls from "./Button.module.css";

export function Button({ children, onClick }) {
  return (
    <div className={cls.btnGroup}>
      <button className={cls.btn} type="submit" onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
