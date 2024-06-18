import React from 'react';

interface InputProps {
  type: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder }) => {
  return (
    <div >
      <input
        type={type}
        placeholder={placeholder}
        className="border border-gray-300 rounded	p-2 w-6/12 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
}

export default Input;