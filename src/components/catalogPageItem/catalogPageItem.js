import React from 'react';
import {Link} from "react-router-dom";

import './catalogPageItem.css'

const CatalogPageItem = (props) => {
    // console.log(props)
    return (
        <div className='catalogPageItem'>
            <img src={props.img} alt="img"/>
            <h2>{props.header}</h2>
            <p>{props.description}</p>
            <p>Price: ${props.price}</p>
            <button><Link to={`/catalog/${props.id + 1}`}>View more</Link></button>
        </div>
    );
};

export default CatalogPageItem;