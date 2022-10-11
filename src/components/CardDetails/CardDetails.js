import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';


const CardDetails = () => {
    const cardDetailsData=useLoaderData();
    const cardDetails=cardDetailsData.data.questions
    // console.log(cardDetailsData);
    return (
        <div className='mt-5'>
             <h3 className='text-center fw-bold'>Quiz Of {cardDetailsData.data.name}</h3>
            {
                cardDetails.map((cardQuiz,idx) => <Quiz key={cardQuiz.id} idx={idx} cardQuiz={cardQuiz}/> ) 

            }
            
        </div>
    );
};

export default CardDetails;