import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../../../../hooks/useInput';
import { setFontSize } from '../../../../modules/font';

const FontInputComponent = () => {
  // 2번 실습
  const fontSize = useSelector((state)=>state.font.inputFontSize)
  const dispatch = useDispatch();

  const [value, onChangeValue] = useInput("")


  return (
    <div>
      <h1 style={{fontSize}}>재미있는 리덕스2 😁</h1>
      <input type="text" value={value} onChange={onChangeValue}/>
      <button onClick={()=>{ dispatch(setFontSize(value)) }}>입력한 값으로 커져라!</button>
    </div>
  );
};

export default FontInputComponent;