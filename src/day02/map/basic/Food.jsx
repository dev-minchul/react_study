import React from 'react';

const Food = ({id,name}) => {
  return (
    <li>
      {id}번 : {name}
    </li>
  );
};

export default Food;