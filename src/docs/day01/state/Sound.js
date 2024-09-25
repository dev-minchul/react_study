import React, { useState } from 'react';

// 실습 15분
// 강아지 버튼과 고양이 버튼을 만들고
// 버튼을 눌렀을 때 각각 울음소리가 나오도록 구현하기

const Sound = () => {

  const [sound, setSound] = useState("");
  const dogButton = () => {
    setSound("멍멍!");
  }
  const catButton = () => {
    setSound("야옹!")
  }

  return (
    <div>
      {sound}
      <button onClick={dogButton}>강아지 버튼🐶</button>
      <button onClick={catButton}>고양이 버튼😺</button>
    </div>
  );
};

export default Sound;