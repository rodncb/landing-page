import "./Button.css";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  href,
  target,
  onClick,
  disabled = false,
  className = "",
  ...props
}) => {
  const baseClasses = "btn";
  const variantClasses = `btn--${variant}`;
  const sizeClasses = `btn--${size}`;
  const disabledClasses = disabled ? "btn--disabled" : "";

  const allClasses = [
    baseClasses,
    variantClasses,
    sizeClasses,
    disabledClasses,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  // Se tem href, renderiza como link
  if (href) {
    return (
      <a href={href} target={target} className={allClasses} {...props}>
        {children}
      </a>
    );
  }

  // Senão, renderiza como button
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={allClasses}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
