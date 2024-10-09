import React from 'react';

interface ButtonProps {
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  children?: React.ReactNode;  // Add this line to allow children
}

const Button: React.FC<ButtonProps> = ({ onClick, type = 'button', className, children }) => {
  return (
    <button 
      type={type} 
      className={`btn ${className}`} // Add default class and any additional classes
      onClick={onClick}
    >
      {children} {/* Render children inside the button */}
    </button>
  );
};

export default Button;
