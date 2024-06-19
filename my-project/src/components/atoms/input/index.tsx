import React from 'react';
import Typography from '../typography';

interface InputProps {
  label: string;
  type: 'text' | 'number';
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input: React.FC<InputProps> = ({ label, type, value, onChange, className = '' }) => {
  return (
    <div className={`flex flex-col mb-2 ${className}`}>
      <Typography variant="subtitle">{label}</Typography>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="border p-2 w-full rounded-lg"
      />
    </div>
  );
};

export default Input;