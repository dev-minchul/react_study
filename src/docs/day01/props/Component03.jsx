import React from 'react';

const Component03 = ({address, phone, style}) => {
  // const {address, phone, style} = props;

  return (
    <p style={style}>
      {address}
      {phone}
    </p>
  );
};

export default Component03;