import React from "react";

const Like = ({ size, color, fill, className, onClick }) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 20 20"
      onClick={onClick}
      fill={fill ? fill : "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.49951 8.125H6.24951V16.25H2.49951C2.33375 16.25 2.17478 16.1842 2.05757 16.0669C1.94036 15.9497 1.87451 15.7908 1.87451 15.625V8.75C1.87451 8.58424 1.94036 8.42527 2.05757 8.30806C2.17478 8.19085 2.33375 8.125 2.49951 8.125V8.125Z"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.24951 8.125L9.37451 1.875C9.70282 1.875 10.0279 1.93966 10.3312 2.0653C10.6345 2.19094 10.9101 2.37509 11.1423 2.60723C11.3744 2.83938 11.5586 3.11498 11.6842 3.41829C11.8098 3.72161 11.8745 4.0467 11.8745 4.375V6.25H16.7085C16.8858 6.25 17.061 6.28769 17.2226 6.36058C17.3841 6.43346 17.5283 6.53987 17.6456 6.67275C17.7629 6.80562 17.8506 6.96192 17.9029 7.13128C17.9552 7.30063 17.9709 7.47917 17.9489 7.65504L17.0114 15.155C16.9736 15.4574 16.8267 15.7355 16.5983 15.9371C16.3699 16.1387 16.0757 16.25 15.771 16.25H6.24951"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Like;
