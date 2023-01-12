import React from "react";

const Like = ({ size, color, className, onClick }) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M1.24951 7.125L4.37451 0.875C4.70282 0.875 5.02791 0.939664 5.33122 1.0653C5.63453 1.19094 5.91013 1.37509 6.14228 1.60723C6.37442 1.83938 6.55857 2.11498 6.68421 2.41829C6.80985 2.72161 6.87451 3.0467 6.87451 3.375V5.25H11.7085C11.8858 5.25 12.061 5.28769 12.2226 5.36058C12.3841 5.43346 12.5283 5.53987 12.6456 5.67275C12.7629 5.80562 12.8506 5.96192 12.9029 6.13128C12.9552 6.30063 12.9709 6.47917 12.9489 6.65504L12.0114 14.155C11.9736 14.4574 11.8267 14.7355 11.5983 14.9371C11.3699 15.1387 11.0757 15.25 10.771 15.25H1.24951"
        stroke="#9494AE"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Like;
