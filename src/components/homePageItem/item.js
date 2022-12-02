import React from 'react';

import './item.css'

const Item = (props) => {
    return (
        <div className='item'>
            <img src={props.img} alt="img" style={{marginBottom: '10px'}}/>
            <h2>{props.header}</h2>
            <p style={{marginRight: '150px', marginLeft: '150px', lineHeight: '35px'}}><i>{props.description}</i></p>
        </div>
    );
};

export default Item;