import React from 'react';

// 스타일, 하위 컴포넌트 받아서 출력
const Component02 = (props) => {
  return (
    <div>
      <p>컴포넌트 02번</p>
      {props.children}
    </div>
  );
};

export default Component02;