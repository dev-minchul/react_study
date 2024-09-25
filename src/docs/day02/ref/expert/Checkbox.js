import React, { useState } from 'react';
// 바벨 es5로 바꿔주는 문법
// 실제 배포를 하기위해서 모던 자바스크립트 문법이 변경되어야 한다.
// 서버 배포시 es6로 변경되기 때문에 es5문법을 리액트에서 권장한다.

const Checkbox = () => {
  const [message, setMessage] = useState([]);

  const onClickToCheckbox = (e) => {
    let value = e.target.value;
    if(e.target.checked){
      setMessage([...message, value]) // 스프레드 문법 객체를 사용하기위한 문법
        // setMessage(message.concat(value))
    }else{
        setMessage(message.filter((m)=> m !== value))
    }
  }

  return (
    <div>
      <div>
        <span>front-end</span>
        <input type="checkbox" onClick={onClickToCheckbox} value="front-end" />
      </div>
      <div>
        <span>back-end</span>
        <input type="checkbox" onClick={onClickToCheckbox} value="back-end" />
      </div>
      <div>
        <span>ai</span>
        <input type="checkbox" onClick={onClickToCheckbox} value="ai" />
      </div>

      <div>
        <h1>{message.map((m,i)=> <p key={i}>{m}</p>)}</h1>
      </div>
    </div>
  );
};

export default Checkbox;