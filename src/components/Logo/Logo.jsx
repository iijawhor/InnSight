import React from "react";

function Logo({ className }) {
  return (
    <div
      className={`logo ${className}`}
      style={{
        color: "#A61919",
        fontSize: "16px",
        fontFamily: "system-ui",
        fontWeight: "550",
        letterSpacing: "1px",
        margin: "0",
        padding: "0",
        height: "fit-content",
        width: "fit-content"
      }}
    >
      InnSight
    </div>
  );
}

export default Logo;
