import React, {useState} from 'react';

import './cartPage.css'
import CartPageItem from "../cartPageItem/cartPageItem";
import {Link, useLocation} from "react-router-dom";


const CartPage = () => {

    const location = useLocation()
    console.log(location)

    let arr = Object.values(sessionStorage)

    let newArr = arr.map(obj => JSON.parse(obj))
    console.log(newArr)

    const [priceSum, setPriceSum] = useState(0)

    return (
        <div className='cartPage'>
            <h2>Booking </h2>

            {newArr.map((obj, id) => <CartPageItem key={id} img={obj.img} header={obj.header} price={obj.price}/>)}

            <div className='cartPagePriceSum'>
                <h3>Total amount: ${priceSum}</h3>
            </div>

            <div className='cartPageBtns'>
                <button><Link to='/catalog'>Back to Catalog</Link></button>
                <button><Link>Continue</Link></button>
            </div>
        </div>
    );
};

export default CartPage;