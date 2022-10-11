import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';


const CardDetails = ({name}) => {
    const cardDetailsData=useLoaderData();
    const cardDetails=cardDetailsData.data.questions
    // console.log(cardDetails);
    return (
        <div className='mt-5'>
             <h3 className='text-center fw-bold'>Quiz Of {name}</h3>
            {
                cardDetails.map(cardQuiz => <Quiz key={cardQuiz.id} cardQuiz={cardQuiz}/> ) 

            }
            
        </div>
    );
};

export default CardDetails;