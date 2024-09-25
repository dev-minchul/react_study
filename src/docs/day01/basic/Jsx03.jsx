// 실습
// 컴포넌트를 만들어서
// 여러 분의 이름과, 나이, 만나이(나이 - 1)를 화면 출력하기!

export default function Jsx03(){
  const name = "김세환";
  const age = 20;
  return (
    <>
      <h1>저의 이름은 {name}입니다.</h1>
      <h2>저의 나이는 {age}</h2>
      <h3>저의 만나이는 {age - 1}</h3>
    </>
  )
}