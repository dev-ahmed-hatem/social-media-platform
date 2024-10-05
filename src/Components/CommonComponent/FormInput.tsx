import React from 'react';

interface InputProps {
  placeholder: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
}

const FormInput: React.FC<InputProps> = ({ placeholder, type, name, value, onChange, required = false, className = '' }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-malibu-400 ${className}`}
    />
  );
};

export default FormInput;
