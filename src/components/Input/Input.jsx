import { forwardRef } from "react";
import cls from "./Input.module.css";

export const Input = forwardRef(
  ({ type, name, placeholder, label, ...rest }, ref) => {
    return (
      <>
        <label className={cls.formlabel} htmlFor={name}>
          {label}
        </label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={cls.formInput}
          ref={ref}
          {...rest}
        />
      </>
    );
  },
);
