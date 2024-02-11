import React from "react";

function Logo({ className }) {
  return (
    <div
      className={`logo ${className}`}
      style={{
        color: "#FF5A5F",
        fontSize: "16px",
        fontFamily: "Times New Roman, Times, serif",
        fontWeight: "400",
        letterSpacing: "1px",
        margin: "0",
        padding: "0",
        height: "fit-content",
        width: "fit-content"
      }}
    >
      Lodigify
    </div>
  );
}

export default Logo;
