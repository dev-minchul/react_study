import React, { useRef, useState } from 'react';

const Name = () => {
  // 사용자가 입력한 이름을 p태그에 실시간으로 작성되도록 구현
  // 버튼을 클릭하면 이름 뒤에 "님" 붙이도록 구현한다.
  // 입력 후 엔터를 작성 하면 p태그에 반영
  const [result, setResult] = useState("");
  const nameRef = useRef();
  const onChangeSetName = (e) => {
    setResult(e.target.value)
  }

 
  const onLCickToputNim = () => {
    setResult(nameRef.current.innerText.replaceAll("님","") + "님");
    
  }
  return (
    <div>
      <input type="text" value={result} placeholder='이름을 입력하세요.' onChange={onChangeSetName} />
      <p ref={nameRef}>{result} </p>
      <button onClick={onLCickToputNim}>완료 버튼</button>
    </div>
  );
};

export default Name;