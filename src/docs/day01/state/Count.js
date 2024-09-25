import React, { useState } from 'react';

const Count = () => {

  // const [변수명, setter메서드] = useState(초기값)
  const [number, setNumber] = useState(0)

  const decrease = () => {
    setNumber(number - 1)
  }
  
  const increase = () => {
    setNumber(number + 1)
  }

  return (
    <>
      <button onClick={decrease}>-1 감소</button>     
      <p>{number}</p>
      <button onClick={increase}>+1 증가</button>   

    </>
  );
};

export default Count;