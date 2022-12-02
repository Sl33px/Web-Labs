import React, {useState} from 'react';

import './cartPage.css'
import CartPageItem from "../cartPageItem/cartPageItem";
import {Link, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";


const CartPage = () => {

    const todos = useSelector(state => state.todos.todos)
    console.log(todos)

    let priceSum = 0
    todos.map(obj => {
        priceSum += +(obj.price)
        return priceSum
    })
    console.log(priceSum)

    const [priceSumm, setPriceSum] = useState(priceSum)

    return (
        <div className='cartPage'>
            <h2>Booking </h2>

            {todos.map((obj, id) => <CartPageItem key={id} id={obj.id} img={obj.img} header={obj.header} description={obj.description} price={obj.price}/>)}

            <div className='cartPagePriceSum'>
                <h3>Total amount: ${priceSumm}</h3>
            </div>

            <div className='cartPageBtns'>
                <button><Link to='/catalog'>Back to Catalog</Link></button>
                <button><Link>Continue</Link></button>
            </div>
        </div>
    );
};

export default CartPage;