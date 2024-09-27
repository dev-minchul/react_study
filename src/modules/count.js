import {createAction, handleActions} from 'redux-actions';

// type 생성
const INCREASE = "count/INCREASE";
const DECREASE = "count/DECREASE";

//  action을 생성
export const incresae = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// state 초기값 생성
const initialState = {
  number : 0
}

//  reducer 제작
// const reducer = (state, action) => {
//   switch(action){
//     case INCREASE :
//       action.setNumber(state.number + 1)
//     case DECREASE :
//       action.setNumber(state.number - 1)
//   }
// }

// reducer
const count = handleActions ({  
  // 안에서 분기처리
  [INCREASE] : (state, action) => ({number : parseInt(state.number) + parseInt(action.payload)}),
  [DECREASE] : (state, action) => ({number : parseInt(state.number) - parseInt(action.payload)}),
}, initialState)

export default count;