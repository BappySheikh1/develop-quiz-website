
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from '../Cards/Cards';
import './Home.css';
import Banner from '../Banner/Banner';
import { QuizDataContext } from '../../Main/Main';



const Home = () => {
    const data =useContext(QuizDataContext)
    // const data=useLoaderData();
    // console.log(data);
    return (
        <div>
            <div>
              <Banner></Banner>
            </div>
            <div className='home-container'>
            {
                data?.map(cards => <Cards key={cards.id} cards={cards}/>)
            }
            </div>
        </div>
    );
};

export default Home;