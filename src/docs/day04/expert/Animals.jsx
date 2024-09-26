// import React, { useContext, useState } from 'react';
// import { AnimalsContext } from './AnimalsContext';
// import Animal from './Animal';

// const Animals = () => {
//   const { action } = useContext(AnimalsContext); // 삽입을 위한 action만 사용
//   const [inputValue, setInputValue] = useState(''); // 입력 필드 상태 관리

//   const AddAnimal = (e) => {
//     if (e.key === 'Enter' && inputValue !== '') { // 입력 값이 있고 Enter 키가 눌렸을 때
//       action.insert(inputValue); // 새로운 동물을 삽입
//       setInputValue(''); // 입력 필드 초기화
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)} // 입력 값이 변경될 때 상태 업데이트
//         onKeyDown={AddAnimal} // Enter 키를 누르면 동물을 추가
//         placeholder="동물을 입력하세요"
//       />
//       <Animal /> {/* 동물 목록을 표시 */}
//     </div>
//   );
// };

// export default Animals;

// 쌤꺼
import React, { useContext, useState } from 'react';
import { AnimalsContext } from './AnimalsContext';
import Animal from './Animal';
import useInput from '../../../hooks/useInput';


// 실습
// Context에 저장된 동물 세마리를 버튼으로 출력(Animal 컴포넌트를 이용)
// input태그에 동물 입력 후 엔터 : 동물 버튼을 추가(Context에 있는 insert 메서드)
// 동물 버튼을 클릭하면 해당 버튼이 삭제(Context에 있는 remove 메서드)
// 모두 각 Context에 선언된 메서드만 사용!
// 스타일은 자유롭게 넣어도 무관!
// useContext() 사용!



const Animals = () => {
  const {state, action} = useContext(AnimalsContext);

  const [value, onChangeValue, setValue] = useInput("");

  const onKeyUpToInsertAnimal = (e) => {
    
    if(e.key ==='Enter'){
      action.insert(value)
    }
  }

  return (
    <div>
      <input type='text' onKeyUp={onKeyUpToInsertAnimal} onChange={onChangeValue}/>
    <Animal />
    </div>
  );
};

export default Animals;