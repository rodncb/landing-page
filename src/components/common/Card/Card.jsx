import React from "react";
import "./Card.css";

const Card = ({
  children,
  variant = "default",
  padding = "lg",
  hover = false,
  className = "",
  onClick,
  ...props
}) => {
  const baseClasses = "card";
  const variantClasses = `card--${variant}`;
  const paddingClasses = `card--padding-${padding}`;
  const hoverClasses = hover ? "card--hover" : "";
  const clickableClasses = onClick ? "card--clickable" : "";

  const allClasses = [
    baseClasses,
    variantClasses,
    paddingClasses,
    hoverClasses,
    clickableClasses,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={allClasses} onClick={onClick} {...props}>
      {children}
    </div>
  );
};

export default Card;
