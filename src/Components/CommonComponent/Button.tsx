import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: (e: React.FormEvent<HTMLButtonElement>) => void; 
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button', className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick} 
      className={`py-2 px-4 bg-malibu-500 text-white font-bold rounded-lg hover:bg-malibu-600 focus:outline-none focus:ring-4 focus:ring-malibu-300 ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
