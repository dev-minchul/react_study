import React from 'react';
import S from './style';
import SmileButton from './SmileButton';


const Home = () => {
  return (
    <div>
      <S.StyledDiv>
        나의 첫 스타일드 컴포넌트😀
      </S.StyledDiv>
      <S.StyleButton color={"red"}>스타일된 버튼</S.StyleButton>
      <SmileButton />
    </div>
  );
};

export default Home;