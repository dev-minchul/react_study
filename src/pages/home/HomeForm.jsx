import React from 'react';
import S from './style';

const HomeForm = () => {
  return (
    <div>
      <S.Form>
        <S.Wrapper>
          <span>아이디</span><input type="text" placeholder='아이디를 입력하세요' />
        </S.Wrapper>
        <S.Wrapper>
          <span>비밀번호</span><input type="password" placeholder='비밀번호를 입력하세요' />
        </S.Wrapper>
        <S.button className ='button'>전송📩</S.button>
      </S.Form>
    </div>
  );
};

export default HomeForm;