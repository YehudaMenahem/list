//create a Button component

import React from 'react';
// import './Button.css';

const Button = ({ children, ...props }) => {

  return (
    <button {...props}>
        {children}
    </button>

    );
}

export default Button;

