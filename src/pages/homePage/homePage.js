import React, {useState} from 'react';

import './homePage.css'
import Item from "../../components/homePageItem/item";

const HomePage = () => {

    const [value, setValue] = useState([
        {
            id: 0,
            img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/11/61/c7/spa--v6995442.jpg?w=1200&h=-1&s=1',
            header: 'Bed',
            description: 'To feel more nature - you can sleep outside on the bed'
        },
        {
            id: 1,
            img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/11/66/03/grounds--v6995370.jpg?w=1200&h=-1&s=1',
            header: 'Garden',
            description: 'Great place to walk with kids and pets'
        },
        {
            id: 2,
            img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1e/1d/21/09/spa.jpg?w=1100&h=-1&s=1',
            header: 'Lounger',
            description: 'After swimming, whether it be in the sea or in the pool, it is a good idea to lie down in the sun on a sun lounger.'
        }
    ])

    function showMoreBtn() {
        if (value.length === 3) {

            document.getElementById('homeItemsBtn').innerText = 'Show less'

            setValue([
                {
                    id: 0,
                    img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/11/61/c7/spa--v6995442.jpg?w=1200&h=-1&s=1',
                    header: 'Bed',
                    description: 'To feel more nature - you can sleep outside on the bed'
                },
                {
                    id: 1,
                    img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/11/66/03/grounds--v6995370.jpg?w=1200&h=-1&s=1',
                    header: 'Garden',
                    description: 'Great place to walk with kids and pets'
                },
                {
                    id: 2,
                    img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1e/1d/21/09/spa.jpg?w=1100&h=-1&s=1',
                    header: 'Lounger',
                    description: 'After swimming, whether it be in the sea or in the pool, it is a good idea to lie down in the sun on a sun lounger.'
                },
                {
                    id: 3,
                    img: 'http://callinfortis.com/~cal/wp-content/uploads/2013/06/Bubble-Charlotte-Restaurant-Design-Callin-Fortis-81.jpg',
                    header: 'Night club',
                    description: 'After a long hard and tiring day - you can relax in the bar'
                },
                {
                    id: 4,
                    img: 'https://www.contemporist.com/wp-content/uploads/2017/03/swimming-pool-design-deck-010317-1208-01-800x534.jpg',
                    header: 'Swimming pool',
                    description: 'Why not take a dip in the pool with a wonderful and breathtaking view in broad daylight?'
                },
                {
                    id: 5,
                    img: 'https://assets.website-files.com/5bf05334017c212448095927/5f48bffe7c762966ea93bbd5_DSC03244-HDR.jpg',
                    header: 'Fitness room',
                    description: 'If you like to play sports, we have a great offer for you - our fitness room'
                }
            ])
        } else {

            document.getElementById('homeItemsBtn').innerText = 'Show more'

            setValue([
                {
                    id: 0,
                    img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/11/61/c7/spa--v6995442.jpg?w=1200&h=-1&s=1',
                    header: 'Bed',
                    description: 'To feel more nature - you can sleep outside on the bed'
                },
                {
                    id: 1,
                    img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/11/66/03/grounds--v6995370.jpg?w=1200&h=-1&s=1',
                    header: 'Garden',
                    description: 'Great place to walk with kids and pets'
                },
                {
                    id: 2,
                    img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1e/1d/21/09/spa.jpg?w=1100&h=-1&s=1',
                    header: 'Lounger',
                    description: 'After swimming, whether it be in the sea or in the pool, it is a good idea to lie down in the sun on a sun lounger.'
                }
            ])
        }
    }

    return (
        <div className='homePage'>
            {/*    content*/}
            <div className='home-descr'>
                <div className='home-descr-img'>
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1e/1d/21/1d/exterior.jpg?w=1100&h=-1&s=1" alt="img"/>
                </div>
                <div className='home-descr-text'>
                    <h3>Our hotel provides:</h3>
                    <ul>
                        <li>Swimming pool</li>
                        <li>Fitness centre</li>
                        <li>Bar / Lounge</li>
                        <li>Beach</li>
                        <li>Canoeing</li>
                        <li>Sauna</li>
                        <li>Restaurant</li>
                        <li>Buffet breakfast</li>
                    </ul>
                    <h5>and more else...</h5>
                </div>
            </div>

            <div className='div-items'>
                {value.map(item => <Item key={item.id} img={item.img} header={item.header} description={item.description}/>)}
            </div>

            <div className='home-items-btn'>
                <button onClick={showMoreBtn} id='homeItemsBtn'>Show more</button>
            </div>
        </div>
    );
};

export default HomePage;