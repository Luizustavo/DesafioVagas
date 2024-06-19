import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
  }

  const Button: React.FC<ButtonProps> = ({ children, onClick, type = 'button', className = '' }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`bg-secondary hover:bg-primary text-white font-bold py-2 px-4 rounded ${className}`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;