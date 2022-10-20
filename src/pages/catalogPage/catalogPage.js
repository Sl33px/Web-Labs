import React, {useState} from 'react';

import './catalogPage.css'
import CatalogPageItem from "../../components/catalogPageItem/catalogPageItem";

const CatalogPage = () => {

    const [catalogPageItemList, setCatalogPageItemList] = useState([
        {
            id: 0,
            img: 'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1600',
            header: 'b',
            description: 'description2',
            price: '500'
        },
        {
            id: 1,
            img: 'http://cdn.cnn.com/cnnnext/dam/assets/140127103345-peninsula-shanghai-deluxe-mock-up.jpg',
            header: 'a',
            description: 'description1',
            price: '1000'
        },
        {
            id: 2,
            img: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1600',
            header: 'c',
            description: 'description4',
            price: '2000'
        },
        {
            id: 3,
            img: 'https://img2.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg',
            header: 'd',
            description: 'description3',
            price: '100'
        },
        {
            id: 4,
            img: 'https://images.pexels.com/photos/210265/pexels-photo-210265.jpeg?auto=compress&cs=tinysrgb&w=1600',
            header: 'f',
            description: 'description5',
            price: '5600'
        },
        {
            id: 5,
            img: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
            header: 'e',
            description: 'description7',
            price: '6500'
        }
    ])

    const [sortByNameOptionState, setSortByNameOptionState] = useState('')
    const [sortByPriceOptionState, setSortByPriceOptionState] = useState('')
    const [sortByDescriptionOptionState, setSortByDescriptionOptionState] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()

        //sort by header
        if (sortByNameOptionState === 'FromLessToMore') {
            //sort by name form A to Z
            setCatalogPageItemList(
                [...catalogPageItemList].sort((a, b) => a.header > b.header ? 1 : -1)
            )
        } else if (sortByNameOptionState === 'FromMoreToLess') {
            //sort by name form Z to A
            setCatalogPageItemList(
                [...catalogPageItemList].sort((a, b) => a.header > b.header ? -1 : 1)
            )
        }

        //sort by price
        if (sortByPriceOptionState === 'FromLessToMore') {
            //sort by price form A to Z
            setCatalogPageItemList(
                [...catalogPageItemList].sort((a, b) => a.price - b.price)
            )
        } else if (sortByPriceOptionState === 'FromMoreToLess') {
            //sort by name form Z to A
            setCatalogPageItemList(
                [...catalogPageItemList].sort((a, b) => b.price - a.price)
            )
        }

        // sort by description
        if (sortByDescriptionOptionState === 'FromLessToMore') {
            //sort by description form A to Z
            setCatalogPageItemList(
                [...catalogPageItemList].sort((a, b) => a.description > b.description ? 1 : -1)
            )
        } else if (sortByDescriptionOptionState === 'FromMoreToLess') {
            //sort by description form Z to A
            setCatalogPageItemList(
                [...catalogPageItemList].sort((a, b) => a.description > b.description ? -1 : 1)
            )
        }

        console.log('sort by name: ', sortByNameOptionState)
        console.log('sort by price: ', sortByPriceOptionState)
        console.log('sort by description: ', sortByDescriptionOptionState)

    }

    return (
        <div className='catalogPage'>
            <div className='catalog-tools-div'>
                <form name='catalogToolForm' onSubmit={handleSubmit}>
                    <select
                        name="Sort by name"
                        id="sortByNameOption"
                        onChange={e => {
                            const selectedSortByNameOption = e.target.value
                            setSortByNameOptionState(selectedSortByNameOption)
                        }}>
                        <option value="">--Name--</option>
                        <option value="FromLessToMore">from A to Z</option>
                        <option value="FromMoreToLess">from Z to A</option>
                    </select>

                    <select
                        name="sort_by_price"
                        id="sortByPriceOption"
                        onChange={e => {
                            const selectedSortByPriceOption = e.target.value
                            setSortByPriceOptionState(selectedSortByPriceOption)
                        }}>
                        <option value="">--Price--</option>
                        <option value="FromLessToMore">from min to max</option>
                        <option value="FromMoreToLess">from max to min</option>
                    </select>

                    <select
                        name="Sort_by_description"
                        id="sortByDescriptionOption"
                        onChange={e => {
                            const selectedSortByDescriptionOption = e.target.value
                            setSortByDescriptionOptionState(selectedSortByDescriptionOption)
                        }}>
                        <option value="">--Description--</option>
                        <option value="FromLessToMore">from A to Z</option>
                        <option value="FromMoreToLess">from Z to A</option>
                    </select>

                    <button onClick={handleSubmit}>Apply</button>
                </form>
            </div>

            <div className='catalog-of-items-container'>
                {catalogPageItemList.map(item => <CatalogPageItem key={item.id} id={item.id} img={item.img} header={item.header} description={item.description} price={item.price}/>)}
            </div>
        </div>
    );
};

export default CatalogPage;