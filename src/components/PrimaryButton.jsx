import React from "react";
import { Link } from "react-router-dom";

// Reusable primary button that can render as a <button> or <Link to="...">.
// Ensures consistent bg, hover, active and focus styles using the brand color #26285b.
const base =
  "inline-flex items-center justify-center px-4 py-2 rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-[#26285b]/30 transition-colors";

const PrimaryButton = ({
  children,
  to,
  onClick,
  className = "",
  type = "button",
  ...props
}) => {
  const cls =
    `${base} bg-[#26285b] hover:bg-[#26285b]/90 active:bg-[#26285b] text-white ${className}`.trim();

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
