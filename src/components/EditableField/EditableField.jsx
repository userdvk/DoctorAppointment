import { CiEdit } from "react-icons/ci";

import cls from "./EditableField.module.css";
import { forwardRef, useState } from "react";

export const EditableField = forwardRef(
  ({ icon, text, type, ...rest }, ref) => {
    const [isEditing, setEditing] = useState(false);
    const [currentValue, setValue] = useState(text);

    const closeInput = (e) => {
      setEditing(false);
      setValue(e.target.value);
      rest.onBlur?.(e);
    };

    return (
      <div
        className={`${cls.menuItem} ${isEditing ? cls.activeItem : ""} `}
        onClick={() => setEditing(true)}
      >
        <div className={cls.iconWrap}>{icon}</div>
        {isEditing ? (
          <input
            className={cls.editInput}
            type={type}
            defaultValue={text}
            {...rest}
            placeholder={text}
            onBlur={closeInput}
            ref={ref}
            autoFocus
          />
        ) : (
          <span className={cls.menuItemSpan}>{currentValue}</span>
        )}
        <CiEdit size="24px" color="#0B8FAC" />
      </div>
    );
  },
);
