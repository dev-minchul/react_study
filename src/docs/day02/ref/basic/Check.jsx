import React, { useRef } from 'react';
import Form from './Form';

// 전송 버튼을 누르면, 아이디와 비밀번호가 작성되었는지 검사하기
// 작성이 모두 완료되었다면 form submit() 함수로 제출



// Ref 여러개를 하나로 받고 싶을 경우 배열로 저장해서 사용한다.
const Check = () => {
  const inputRef = useRef([]);
  const formRef= useRef();

  console.log(inputRef.current)

  const onClickToCheck = () => {
    for(let input of inputRef.current){
      console.log(input)
      if(!input.value){
        console.log(input.name + " error")
        return
      }
    }
    formRef.current.submit();
  }
  
  return (
    <div>
      <Form inputRef={inputRef} formRef={formRef} onClickToCheck={onClickToCheck} />
    </div>
  );
};

export default Check;