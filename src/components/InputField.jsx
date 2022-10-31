import React from 'react';

const InputField = ({ label, inputType }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-1 tracking-wide">
        {label} <span className="text-[#F12C2C]">*</span>
      </label>
      <input
        className="bg-transparent text-md font-bold w-80 h-10 px-2 rounded-md border"
        type={inputType}
        name={inputType}
        autoCorrect="off"
        autoComplete="off"
        required
      />
    </div>
  );
};

export default InputField;
