import { createAction, handleActions } from "redux-actions";

// 타입 생성
const INCREASE = "font/INCREASE";
const SETFONTSIZE = "font/SETFONTSIZE"
// 액션 생성
export const increase = createAction(INCREASE);
export const setFontSize = createAction(SETFONTSIZE);

// state 초기값 생성
const initialState  = {
  fontSize : "1rem",
  inputFontSize : "1rem"
}


const font = handleActions({
  // 안에서 분기처리
  [INCREASE] : (state) => ({...state, fontSize : "3rem"}),
  [SETFONTSIZE] : (state, action) => ({...state, inputFontSize : action.payload}),
},initialState)

export default font;
// 리듀서 생성
