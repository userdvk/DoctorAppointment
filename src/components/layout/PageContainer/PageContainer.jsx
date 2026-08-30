import { useNavigate } from "react-router-dom";
import cls from "./PageContainer.module.css";

import { IoChevronBackSharp } from "react-icons/io5";

export function PageContainer({ title, children, showBackButton }) {
  const navigate = useNavigate();
  return (
    <div className={cls.wrapper}>
      {showBackButton ? (
        <div className={cls.withBackButton} onClick={() => navigate(-1)}>
          <IoChevronBackSharp size={30} />
          <h5 className={cls.title}>{title}</h5>
        </div>
      ) : (
        <h5 className={cls.title}>{title}</h5>
      )}

      {children}
    </div>
  );
}
