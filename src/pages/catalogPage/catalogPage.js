import React, {useEffect, useState} from 'react';

import './catalogPage.css'
import CatalogPageItem from "../../components/catalogPageItem/catalogPageItem";
import {getHotels} from "../../api/api";

const CatalogPage = () => {

    const [hotelsData, setHotelsData] = useState([])

    const [sortByNameOptionState, setSortByNameOptionState] = useState('')
    const [sortByPriceOptionState, setSortByPriceOptionState] = useState('')
    const [sortByDescriptionOptionState, setSortByDescriptionOptionState] = useState('')
    //loader component state
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {getHotels().then(setHotelsData).then(() => setIsLoading(false))}, [isLoading])
    console.log(hotelsData)

    const handleSubmit = (e) => {
        e.preventDefault()

        //sort by header
        if (sortByNameOptionState === 'FromLessToMore') {
            //sort by name form A to Z
            setHotelsData(
                [...hotelsData].sort((a, b) => a.header > b.header ? 1 : -1)
            )
        } else if (sortByNameOptionState === 'FromMoreToLess') {
            //sort by name form Z to A
            setHotelsData(
                [...hotelsData].sort((a, b) => a.header > b.header ? -1 : 1)
            )
        }

        //sort by price
        if (sortByPriceOptionState === 'FromLessToMore') {
            //sort by price form A to Z
            setHotelsData(
                [...hotelsData].sort((a, b) => a.price - b.price)
            )
        } else if (sortByPriceOptionState === 'FromMoreToLess') {
            //sort by name form Z to A
            setHotelsData(
                [...hotelsData].sort((a, b) => b.price - a.price)
            )
        }

        // sort by description
        if (sortByDescriptionOptionState === 'FromLessToMore') {
            //sort by description form A to Z
            setHotelsData(
                [...hotelsData].sort((a, b) => a.description > b.description ? 1 : -1)
            )
        } else if (sortByDescriptionOptionState === 'FromMoreToLess') {
            //sort by description form Z to A
            setHotelsData(
                [...hotelsData].sort((a, b) => a.description > b.description ? -1 : 1)
            )
        }
    }

    function findCatalogItem() {

        let findCatalogItemInput = document.getElementById('findCatalogItemInput').value
        console.log(findCatalogItemInput)

        console.log(hotelsData)
        let arr = hotelsData.filter(obj => obj.header === findCatalogItemInput)
        setHotelsData(arr)
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

                <div className='header-search-container'>
                    <input id='findCatalogItemInput' type="search"/>
                    <button onClick={findCatalogItem}>Search</button>
                </div>
            </div>

            <div className='catalog-of-items-container'>
                {hotelsData.map(item => <CatalogPageItem key={item.id} id={item.id} img={item.img} header={item.header}
                                                       description={item.description} price={item.price}/>)}
            </div>
        </div>
    );
};

export default CatalogPage;