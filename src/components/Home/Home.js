import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from '../Cards/Cards';
import './Home.css'

const Home = () => {
    const quizCardsData=useLoaderData()
    // console.log(quizCardsData)
    const quizCards=quizCardsData.data
    // console.log(quizCards)
    return (
        <div className='home-container'>
            {
                quizCards.map(cards => <Cards key={cards.id} cards={cards}/>)
            }
        </div>
    );
};

export default Home;