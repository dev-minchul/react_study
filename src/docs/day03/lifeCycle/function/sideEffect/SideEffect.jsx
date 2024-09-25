import React, { useEffect, useState } from 'react';

const SideEffect = () => {

    const [color, setColor] = useState("");
    const [number, setNumber] = useState(0);

    const getRandomColor = () => {
        return "#" + Math.floor(Math.random() * 16777215).toString(16)
    }
     
    const onClickToChangeColor = () => {
        setColor(getRandomColor())
    }
    
    const onClickToIncrease = () => {
        // setNumber(number + 1);
        setNumber((prev) => {
          console.log(prev)
          return number + 1;
        });
    }
    // 랜더링 될 때 마다
    // useEffect(() => {
    //     console.log("랜더링!")
    // })
   
    // 최초 마운트 될 때 한 번만 실행
    // useEffect(() => {
    //     console.log("랜더링!")
    // }, [])

    // 의존성 배열의 상태가 변경될 대만 리랜더링
    useEffect(() => {
        console.log("랜더링!")
        console.log(number)
    }, [number])

    return (
        <div>
            <h1 style={{color}}>안녕하세요</h1>
            <button onClick={onClickToChangeColor}>색상 변경</button>
            <button onClick={onClickToIncrease}>+1 증가</button>
        </div>
    );
};

export default SideEffect;