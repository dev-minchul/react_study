// import React, { useState, useRef } from 'react';

// const Foodcontainer = () => {
//   const [koreanFood, setKoreanFood] = useState('');
//   const [englishFood, setEnglishFood] = useState('');
//   const [foodList, setFoodList] = useState([]);
//   const FoodRef = useRef(""); 

//   const AddFood = () => {
//     if(koreanFood && englishFood){
//       const foodName = FoodRef.current ? FoodRef.current.innerText : '';
//       setFoodList([...foodList, { korean: foodName || koreanFood, english: englishFood }]);
//       setKoreanFood('');
//       setEnglishFood('');
//     }
//   }
//   const DeleteFood = () => {
//     setFoodList(foodList.slice(0, -1)); 
//   };

//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           placeholder="한국 음식이름"
//           value={koreanFood}
//           onChange={(e) => setKoreanFood(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="영어 음식이름"
//           value={englishFood}
//           onChange={(e) => setEnglishFood(e.target.value)}
//         />
//       </div>
//       <div>
//         <button onClick={AddFood}>추가</button>
//         <button onClick={DeleteFood}>삭제</button>
//       </div>
//       <div>
//         <ul>
//           {foodList.map((food, index) => (
//             <li key={index}>
//              <input type="checkbox" /> {food.korean} ({food.english})
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Foodcontainer;



import React, { useRef, useState } from 'react';

// 50분
const FoodContainer = () => {

  // input에 입력한 값을 추가 버튼을 눌렀을 때 foods로 추가!
  // input은 2개 -> useRef()
  const [foods, setFoods] = useState([]);
  const inputRef = useRef([]);
  
  const onClickToAddFood = () => {
    setFoods(
      foods.concat({
        kor : inputRef.current[0].value,
        eng : inputRef.current[1].value
      })
    )
    setChecked(checked.concat(false))
  }

  // foods랑 check의 방 수를 맞춰서 index로 비교하기
  const [checked, setChecked] = useState([]);

  const onChangeCheckbox = (i) => {
    // splice i번째 부터 1개, 새로운 배열 수정
    checked.splice(i, 1, !checked[i]);
    setChecked(checked.concat())
  }

  const onClickToRemoveFood = () => {
    setFoods( foods.filter((food, i) => !checked[i]))
    setChecked( new Array(foods.length).fill(false));
  }

  const foodList = foods.map(({kor, eng}, i) => (
    <li key={i}>
      <input 
        type="checkbox" 
        onChange={() => { onChangeCheckbox(i) }} 
        checked={checked[i]}
      />
      {kor} ({eng})
    </li>
  ));

  return (
    <div>
      <div>
        <input type="text" ref={(el) => inputRef.current[0] = el} placeholder='한국 음식이름' />
        <input type="text" ref={(el) => inputRef.current[1] = el} placeholder='영어 음식이름' />
      </div>
      <div>
        <button onClick={onClickToAddFood}>추가</button>
        <button onClick={onClickToRemoveFood}>삭제</button>
      </div>
      <div>
        <ul>
          {foodList}
        </ul>
      </div>
    </div>
  );
};

export default FoodContainer;