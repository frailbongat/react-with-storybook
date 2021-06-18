import React from 'react';
import './Button.css';

const Button = ({ variant = 'primary', children }) => (
  <button className={`btn bg-${variant}`}>{children}</button>
);

export default Button;
