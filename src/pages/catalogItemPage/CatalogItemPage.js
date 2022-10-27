import React, {useState} from 'react';
import {Link, useLocation} from "react-router-dom";

import './CatalogItemPage.css'

const CatalogItemPage = () => {

    const location = useLocation()
    console.log(location)

    const [secondDescription, setSecondDescription] = useState(
        <div>
            {/*header, text*/}
            <div className='catalog-single-page-text'>
                <h1>{location.state.header}</h1>
                <p>{location.state.description}</p>
            </div>

            {/*select inputs*/}
            <div className='catalog-single-page-inputs'>
                <form name='catalogSingleItemForm'>
                    <input type="text" placeholder='Name'/>

                    <select>
                        <option value="">--Quantity of person--</option>
                        <option value="FromLessToMore">1</option>
                        <option value="FromMoreToLess">2-4</option>
                        <option value="FromMoreToLess">5-10</option>
                    </select>


                    {/*<button>Apply</button>*/}
                </form>
            </div>
        </div>
    )

    function firstDescr() {
        return setSecondDescription(
            <div>
                <br/>
                <h2>1st descr</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    <br/>
                    Aliquid aut culpa cupiditate illo, illum in necessitatibus nisi
                    <br/>
                    obcaecati omnis praesentium quasi
                    <br/>
                    repellat rerum sapiente sunt voluptas.
                    <br/>
                    Doloremque nisi quisquam quo.
                </p>
            </div>
        )
    }

    function secondDescr() {
        return setSecondDescription(
            <div>
                {/*header, text*/}
                <div className='catalog-single-page-text'>
                    <h1>{location.state.header}</h1>
                    <p>{location.state.description}</p>
                </div>

                {/*select inputs*/}
                <div className='catalog-single-page-inputs'>
                    <form name='catalogSingleItemForm'>
                        <input type="text" placeholder='Name'/>

                        <select>
                            <option value="">--Quantity of person--</option>
                            <option value="FromLessToMore">1</option>
                            <option value="FromMoreToLess">2-4</option>
                            <option value="FromMoreToLess">5-10</option>
                        </select>
                    </form>
                </div>
            </div>
        )
    }

    return (
        <div className='CatalogItemPage'>
            <div className='catalog-single-page-container'>
                {/*img*/}
                <div>
                    <img src={location.state.img} alt="img"/>
                </div>

                {/*btns, header, text, select inputs*/}
                <div className='catalog-single-page-descr'>
                    {/*btns*/}
                    <div className='catalog-single-page-descr-btns'>
                        <button onClick={firstDescr}>1st characteristik</button>
                        <button onClick={secondDescr}>2nd characteristik</button>
                    </div>

                    {secondDescription}
                </div>
            </div>

            {/*btns*/}
            <div className='catalog-single-page-tool'>
                <div>
                    <h2>Price: ${location.state.price}</h2>
                </div>

                <div className='catalog-single-page-tool-btns'>
                    <button><Link to='/catalog'>Go back</Link></button>
                    <button onClick={() => {

                            sessionStorage.setItem(`item${location.state.id}`, JSON.stringify(
                                                                                        {id: location.state.id,
                                                                                               img: location.state.img,
                                                                                               header: location.state.header,
                                                                                               price: location.state.price}))

                            let arr = Object.values(sessionStorage)

                            for (let obj of arr) {
                                if (obj.id === 0 || obj.id !== location.state.id) {
                                    sessionStorage.setItem(`item${location.state.id}`, JSON.stringify(
                                                                                                {id: location.state.id,
                                                                                                      img: location.state.img,
                                                                                                      header: location.state.header,
                                                                                                      price: location.state.price}))
                                }
                            }
                    }}>
                        <Link to='/cart' state={{id: location.state.id, img: location.state.img, header: location.state.header, price: location.state.price}}>
                            Add to card
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CatalogItemPage;