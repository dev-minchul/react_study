import React from 'react';


// Form 컴포넌트로 분리
const Form = ({inputRef, formRef,onClickToCheck}) => {
  return (
    // <div>
    //   [{id},{password}] 
    // </div>

           <form ref={formRef} action='test'>
        <div>
          <span>아이디</span>
          <input type="text" name='id' ref={(el) => inputRef.current[0] = el}/>
          </div>
        <div>
          <span>비밀번호</span>
          <input type="text" name='password' ref={(el) => inputRef.current[1] = el}/>
          </div>
          <button type="button" onClick={onClickToCheck}>전송</button>
      </form> 
  );
};

export default Form;