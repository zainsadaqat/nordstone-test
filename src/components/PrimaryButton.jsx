import React from 'react';

const PrimaryButton = ({ text, type }) => {
  return (
    <button
      className="tracking-wide font-bold py-3 text-center text-sm bg-[#000] w-80 rounded-md"
      type={type}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
