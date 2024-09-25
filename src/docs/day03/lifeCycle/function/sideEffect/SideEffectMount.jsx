// (1)
// import React, { useState, useEffect } from 'react';
// // fetch로 요청 후 Side-Effect를 해결 후
// // 화면에 user의 name만 li태그로 출력하기

// const SideEffectMount = () => {
//   // users 상태를 관리하기 위한 useState 선언
//   const [users, setUsers] = useState([]);

//   // 컴포넌트가 마운트될 때 데이터를 가져오기 위한 useEffect 사용
//   useEffect(() => {
//     const getDatas = async () => {
      
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const datas = await response.json();
//         setUsers(datas); // 데이터를 받아서 상태에 저장
//     };

//     getDatas(); // useEffect 안에서 함수 호출
//   }, []); // 빈 배열을 두 번째 인자로 넘기면 컴포넌트가 마운트될 때 한 번만 실행

//   return (
//     <div>
//       <ul>
//         {users.map((user, i) => (
//           <li key={i}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SideEffectMount;

// (2)

import React, { useEffect, useState } from 'react';


// https://jsonplaceholder.typicode.com/users
// fetch로 요청후 Side-Effect를 해결 후
// 화면에 user의 name만 li태그로 출력하기

const SideEffectMount = () => {

    const [userNames, setUserNames] = useState([]);

    useEffect(() => {
        const getUserName = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const datas = await response.json()
            return datas; // -> setUserNames가 수정하면서 상태를 바꿔줌 그래서 useEffect에 넣어야됨
    }

        getUserName().then(setUserNames);   
    },[]);
// {name} -> 비구조화
    return (
        <ul>
            {userNames.map(({name},i)=><li key={i}>{name}</li>)}  
        </ul>
    );
};

export default SideEffectMount;