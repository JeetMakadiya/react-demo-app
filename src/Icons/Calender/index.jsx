import React from "react";

const Calender = ({ size, color, className }) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.167 2.49998H16.5003C16.7213 2.49998 16.9333 2.58778 17.0896 2.74406C17.2459 2.90034 17.3337 3.1123 17.3337 3.33331V16.6666C17.3337 16.8877 17.2459 17.0996 17.0896 17.2559C16.9333 17.4122 16.7213 17.5 16.5003 17.5H1.50033C1.27931 17.5 1.06735 17.4122 0.91107 17.2559C0.75479 17.0996 0.666992 16.8877 0.666992 16.6666V3.33331C0.666992 3.1123 0.75479 2.90034 0.91107 2.74406C1.06735 2.58778 1.27931 2.49998 1.50033 2.49998H4.83366V0.833313H6.50033V2.49998H11.5003V0.833313H13.167V2.49998ZM15.667 9.16665H2.33366V15.8333H15.667V9.16665ZM11.5003 4.16665H6.50033V5.83331H4.83366V4.16665H2.33366V7.49998H15.667V4.16665H13.167V5.83331H11.5003V4.16665ZM4.00033 10.8333H5.66699V12.5H4.00033V10.8333ZM8.16699 10.8333H9.83366V12.5H8.16699V10.8333ZM12.3337 10.8333H14.0003V12.5H12.3337V10.8333Z"
        fill={color}
      />
    </svg>
  );
};

export default Calender;
