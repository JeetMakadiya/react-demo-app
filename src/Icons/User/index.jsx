import React from "react";

const User = ({ size, ...props }) => {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14 0.666656C6.64002 0.666656 0.666687 6.63999 0.666687 14C0.666687 21.36 6.64002 27.3333 14 27.3333C21.36 27.3333 27.3334 21.36 27.3334 14C27.3334 6.63999 21.36 0.666656 14 0.666656ZM14 4.66668C16.2134 4.66668 18 6.45334 18 8.66668C18 10.88 16.2134 12.6667 14 12.6667C11.7867 12.6667 10 10.88 10 8.66668C10 6.45334 11.7867 4.66668 14 4.66668ZM14 23.6C10.6667 23.6 7.72003 21.8934 6.00003 19.3067C6.04003 16.6534 11.3334 15.2 14 15.2C16.6534 15.2 21.96 16.6534 22 19.3067C20.28 21.8934 17.3334 23.6 14 23.6Z"
        fill="white"
      />
    </svg>
  );
};

export default User;
