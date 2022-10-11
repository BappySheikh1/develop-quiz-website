import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from '../Cards/Cards';
import './Home.css'

const Home = () => {
    const data=useLoaderData();
    return (
        <div>
            <div>
              <header className=''>
                <h2>Welcome To You LearnPLUS Quiz</h2>
                <h5></h5>
              </header>
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