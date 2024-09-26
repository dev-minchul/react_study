import React, { useContext } from 'react';
import { AnimalsContext } from './AnimalsContext';

const Animal = () => {
  const {state , action} = useContext(AnimalsContext);
const AnimalsList = state.animals.map((animal, i)=>(
  <li key={i}>
    <button onClick={() => {action.remove(i)}}>{animal}</button>
  </li>
))

  return (
    <div>
      {AnimalsList}
    </div>
  );
};

export default Animal;