
import React, { useContext } from 'react';
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
            <div className='text-center my-5'>
                <h1 className='fw-bold'>Quiz! <span className='text-danger'>LearnPLUS</span> Everyday.</h1>
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