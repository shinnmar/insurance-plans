import { type MouseEventHandler, type ReactNode } from "react";
import styles from "./Card.module.scss";

type CardProps = {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const Card = ({ children, className = "", onClick }: CardProps) => {
  const isClickable = !!onClick;

  return (
    <div
      onClick={onClick}
      className={`${styles.card} ${
        isClickable ? styles["card--interactive"] : ""
      } ${className}`}
      role={isClickable ? "button" : undefined}
      tabIndex={isClickable ? 0 : undefined}
    >
      {children}
    </div>
  );
};

export default Card;
