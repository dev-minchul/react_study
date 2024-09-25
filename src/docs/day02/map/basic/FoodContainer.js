import React from 'react';
import Food from './Food';

const FoodContainer = () => {

    const ginaList = [
        {
            id : 1,
            name : "햄버거"
        },
        {
            id : 2,
            name : "칼국수"
        },
        {
            id : 3,
            name : "코삼이커피"
        },
        {
            id : 4,
            name : "피자"
        },
        {
            id : 5,
            name : "스테이크"
        },
    ]
    
    const foodList =ginaList.map(({id, name}, i)=><Food key={i} id={id} name={name}/>);

    return (
        <ul>
            {foodList}
        </ul>
    );
};

export default FoodContainer;