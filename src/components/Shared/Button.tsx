import styles from "./Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit";
  className?: string;
  variant?: "black" | "red";
  onClick?: () => void;
};

function Button({
  children,
  type = "button",
  className = "",
  variant,
  onClick,
}: ButtonProps) {
  const variantClass = variant ? styles[`button--${variant}`] : "";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${variantClass} ${className}`}
    >
      <span>{children}</span>
    </button>
  );
}

export default Button;
