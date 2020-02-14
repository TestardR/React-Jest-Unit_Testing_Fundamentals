import React from 'react';
import './button.styles.css'

const Button = ({ label }) => {
  return <button data-testid="button" className="button__style">{label}</button>;
};

export default Button;
