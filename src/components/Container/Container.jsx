import React from "react";

function Container({ children, className }) {
  return (
    <div
      style={{ width: "100%", margin: "0", padding: "0", height: "100%" }}
      className={`container ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;
