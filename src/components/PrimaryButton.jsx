import React from "react";
import { Link } from "react-router-dom";

// Reusable primary button that can render as a <button> or <Link to="...">.
// Ensures consistent bg, hover, active and focus styles using the brand color #26285b.
const PrimaryButton = ({
  children,
  to,
  onClick,
  className = "",
  type = "button",
  ...props
}) => {
  const cls = `primary-btn ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cls} {...props}>
      {children}
    </button>
  );
};

export default PrimaryButton;
