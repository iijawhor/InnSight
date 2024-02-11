import React, { forwardRef } from "react";
import "./InputComponent.css";
const InputComponent = forwardRef(({ placeholder }, ref) => {
  return (
    <div className="inputComponent">
      <input
        type="text"
        placeholder={placeholder}
        ref={ref}
        className="inputComponentInputField"
      />
    </div>
  );
});

export default InputComponent;
