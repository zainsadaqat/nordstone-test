import React from 'react';

const SecondaryButton = ({ text, type }) => {
  return (
    <button
      className="tracking-wide font-bold py-3 text-center text-sm border-[1px] w-80 rounded-md"
      type={type}
    >
      {text}
    </button>
  );
};

export default SecondaryButton;
