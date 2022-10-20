import React from 'react';

import './catalogPageItem.css'

const CatalogPageItem = (props) => {
    console.log(props)
    return (
        <div className='catalogPageItem'>
            <img src={props.img} alt="img"/>
            <h2>{props.header}</h2>
            <p>{props.description}</p>
            <p>Price: ${props.price}</p>
            <button>View more</button>
        </div>
    );
};

export default CatalogPageItem;