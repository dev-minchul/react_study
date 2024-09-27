import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, incresae } from '../../../modules/count';
import useInput from '../../../hooks/useInput';

const Counter = () => {
  // store에 값을 가져오는 훅 함수 useSelector();
  console.log(useSelector(({number})=> number));
  const font = useSelector((state) => state.number);
 
  // 액션을 발생시키는 훅 함수 useDispatch();
  const dispatch = useDispatch();

  return (
    <div>
      <Counter />
    </div>
  );
};

export default CountContainer;