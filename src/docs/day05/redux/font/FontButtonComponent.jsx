import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase } from '../../../../modules/font';

const FontButtonComponent = () => {
  // 1번 실습
  const fontSize = useSelector((state)=> state.font.fontSize)
  const dispatch = useDispatch();

  return (
    <div>
      <h1 style={{fontSize}}>재미있는 Redux!😎</h1>
      <button onClick={()=>{ dispatch(increase()) }}>커지는 버튼</button>
    </div>
  );
};

export default FontButtonComponent;