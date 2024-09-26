import { createContext, useState } from "react";
import styled from "styled-components";

// 컨텍스트 생성 및 초기화
const AnimalsContext = createContext({
  state : { 
    animals : []
  },
  action : { 
    insert : () => {},
    remove : () => {}
  }
});

// Provider 생성
const AnimalsProvider = ({children}) => {

  const [animals, setAnimals] = useState(["누렁이", "점박이", "치즈"])
  
  // animals에 동물을 추가하는 insert, 동물을 삭제하는 remove 함수 완성!
  const insert = (animal) => {setAnimals(animals.concat(animal))};
  
  const remove = (i) => {setAnimals(animals.filter((animal, index) => i !== index))};

  const value = {
    state : { animals : animals },
    action : { insert : insert, remove : remove }
  }

  return (
    <AnimalsContext.Provider value={value}>
      {children}
    </AnimalsContext.Provider>
  )
} 



export { AnimalsProvider, AnimalsContext };