import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
    text: string;
    to: string;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, to, className }) => {
    return (
        <Link to={to} className="flex flex items-center justify-center">
            <button>
                {text}
            </button>
        </Link>
    )
}

export default Button;