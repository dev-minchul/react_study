import React from 'react';
import Button from './style';

const BasicButton = ({children, variant, shape, size, border, color, font}) => {
  return (
    <Button variant={variant} shape={shape} size={size} border={border} color={color} font={font}>
      {children}
    </Button>
  );
};

export default BasicButton;