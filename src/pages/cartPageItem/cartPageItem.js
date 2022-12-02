import React, {useState} from 'react';

import './cartPageItem.css'
import {useDispatch} from "react-redux";
import {removeTodo} from "../../store/todoSlice";

const CartPageItem = ({id, img, header, description, price}) => {

    let obj = {
        id: id,
        img: img,
        header: header,
        description: description,
        price: price
    }

    const [counter, setCounter] = useState(1)
    const [priceCount, setPriceCount] = useState([+price])

    const dispatch = useDispatch()
    const removeObjectFromStore = (obj) => dispatch(removeTodo(obj))

    function counterDec() {
        removeObjectFromStore()
        setCounter(counter <= 1 ? 1 : counter - 1)
        setPriceCount(counter <= 1 ? priceCount : +priceCount - +price)
        // console.log(priceCount, price)
    }

    function counterInc() {
        setCounter(counter + 1)
        setPriceCount(+priceCount + +price)
        // console.log(priceCount, price)
    }

    return (
        <div className='cartPageItem'>
            <div>
                <img src={img} alt="img"/>
            </div>

            <div className='cartPageItemHeader'>
                <h1>{header}</h1>
            </div>

            <div className='cartPageItemCounter'>
                <button onClick={counterDec}>-</button>
                <span>{counter}</span>
                <button onClick={counterInc}>+</button>
            </div>

            <div className='cartPageItemPrice'>
                <h3>${priceCount}</h3>
            </div>
        </div>
    );
};

export default CartPageItem;