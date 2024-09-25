// Jsx태그의 연산
import React from "react";

function Jsx02 () {

  const name = "김세환";

  return (
    <React.Fragment>
      <h1>저의 이름은 {name}입니다.</h1>
    </React.Fragment>
  )
}

export default Jsx02;