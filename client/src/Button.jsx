import React from "react";

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded font-medium transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
