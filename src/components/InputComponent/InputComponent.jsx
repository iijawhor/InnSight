import React, { forwardRef } from "react";
import "./InputComponent.css";
const InputComponent = forwardRef(
  ({ placeholder, value, onChange, ...props }, ref) => {
    return (
      <div className="inputComponent">
        <input
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          ref={ref}
          className="inputComponentInputField"
          {...props}
        />
      </div>
    );
  }
);

export default InputComponent;
