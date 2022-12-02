import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addTodo} from "../../store/todoSlice";

import './CatalogItemPage.css'
import axios from "axios";
import {createStore} from "redux";
import {text} from "@fortawesome/fontawesome-svg-core";

const CatalogItemPage = () => {

    const hotelsData = [
        {
            "id": 0,
            "img": "https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "header": "b",
            "description": "description2",
            "price": "500"
        },
        {
            "id": 1,
            "img": "http://cdn.cnn.com/cnnnext/dam/assets/140127103345-peninsula-shanghai-deluxe-mock-up.jpg",
            "header": "a",
            "description": "description1",
            "price": "1000"
        },
        {
            "id": 2,
            "img": "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "header": "c",
            "description": "description4",
            "price": "2000"
        },
        {
            "id": 3,
            "img": "https://img2.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg",
            "header": "d",
            "description": "description3",
            "price": "100"
        },
        {
            "id": 4,
            "img": "https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "header": "f",
            "description": "description5",
            "price": "5600"
        },
        {
            "id": 5,
            "img": "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            "header": "e",
            "description": "description7",
            "price": "6500"
        }
    ]

    const {id} = useParams()

    let paramId = parseInt(id)

    let hotel = hotelsData.find(obj => obj.id === paramId - 1 ? obj : console.log("there are no this object"))

    console.log("hotel: ", hotel)


    const [secondDescription, setSecondDescription] = useState(
        <div>
            {/*header, text*/}
            <div className='catalog-single-page-text'>
                <h1>{hotel.header}</h1>
                <p>{hotel.description}</p>
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
                    <h1>{hotel.header}</h1>
                    <p>{hotel.description}</p>
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

    const dispatch = useDispatch()
    const addObjectToStore = (obj) => dispatch(addTodo(obj))

    return (
        <div className='CatalogItemPage'>
            <div className='catalog-single-page-container'>
                {/*img*/}
                <div>
                    <img src={hotel.img} alt="img"/>
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
                    <h2>Price: ${hotel.price}</h2>
                </div>

                <div className='catalog-single-page-tool-btns'>
                    <button><Link to='/catalog'>Go back</Link></button>
                    {/*while click - new object adds to store of redux*/}
                    <button onClick={() => addObjectToStore(hotel)}>
                        <Link to='/cart'>
                            Add to card
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CatalogItemPage;