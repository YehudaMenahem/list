//create a Button component

import React from 'react';
import './button.css';

const Button = ({ label, size, click, classes, fullWidth }) => {

  return (
    <button className={`${classes ? classes:""} ${size ? size:""} ${fullWidth ? "full-width":""}`} onClick={click}>
        {label}
    </button>
  );
}

export default Button;

