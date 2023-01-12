import React from "react";

const NavMenu = ({ size, color, className, onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      width={size}
      height={size}
      className={`cursor-pointer ${className}`}
      onClick={onClick}
    >
      <path
        fill="none"
        stroke={color}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="2"
        d="M3 15L27 15M3 8L27 8M3 22L27 22"
      />
    </svg>
  );
};

export default NavMenu;
