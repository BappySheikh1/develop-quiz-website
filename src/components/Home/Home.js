
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from '../Cards/Cards';
import './Home.css';
import logo from '../../image/pexels-pixabay-301920.jpg'
import Banner from '../Banner/Banner';


const Home = () => {
    const data=useLoaderData();
    return (
        <div>
            <div>
              <Banner></Banner>
            </div>
            <div className='home-container'>
            {
                data?.data.map(cards => <Cards key={cards.id} cards={cards}/>)
            }
            </div>
    
        </div>
    );
};

export default Home;