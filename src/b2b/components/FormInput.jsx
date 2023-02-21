import React from "react";

const FormInput = (props) => {
  const { name, label, onchange, type, defaultVal, disabled } = props;

  return (
    <div className="h-[40px] min-w-[200px] border-2  max-w-[350px] relative ">
      <input
        className="h-[100%] w-[100%] border-none outline-none px-2 text-[12px]"
        type={type || "text"}
        name={name}
        disabled={disabled || false}
        defaultValue={defaultVal}
        required
        onChange={onchange}
      />
      <label
        className={`focus-within:top-0 absolute text-[10px] text-blue-700 -top-[9px] px-1.5 border-r-2  border-l-2   left-2 bg-white pointer-events-none`}
        htmlFor=""
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
