import React, { useContext } from 'react';
import { FontSizeContext } from './FontContext';

const FontComponent = () => {
  const { state, action } = useContext(FontSizeContext);

  return (
    <div>
      {/* p 태그에 Context에서 가져온 fontSize와 color 적용 */}
      <p style={state}>최하위 컴포넌트🥰</p>
      
      {/* 버튼 클릭 시 색상과 폰트사이즈 변경 */}
      <button onClick={() => action.setColor('blue')}>색상 변경 버튼</button>
      <button onClick={() => action.setFontSize('2rem')}>폰트사이즈 변경 버튼</button>
    </div>
  );
};

export default FontComponent;
