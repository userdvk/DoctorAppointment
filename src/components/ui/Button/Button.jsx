import cls from "./Button.module.css";

export function Button({ children }) {
  return (
    <div className={cls.btnGroup}>
      <button className={cls.btn} type="submit">
        {children}
      </button>
    </div>
  );
}
