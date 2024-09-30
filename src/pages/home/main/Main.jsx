import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div>
      <h1>환영합니다! 여기는 메인페이지🤣</h1>
      <Link to ='./intro'>소개페이지로 이동</Link>
    </div>
  );
};

export default Main;