import React from 'react';

const Component01 = (props) => {
  console.log(props)
  return (
    <div>
      {props.name}님의 나이는 {props.age}입니다.
    </div>
  );
};

export default Component01;