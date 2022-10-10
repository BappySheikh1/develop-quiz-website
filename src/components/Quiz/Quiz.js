import React from 'react';
import './Quiz.css'

const Quiz = ({cardQuiz}) => {
    console.log(cardQuiz)
    const {question,options,correctAnswer}=cardQuiz
    return (
        <div className='mt-5'>
            <div className='w-75 m-auto py-5 border rounded my-4 shadow-sm'>
                <h5>Quiz-1:{question}</h5>
               <div className=' form-check quiz-box'>

                 <div className='border p-2 rounded '> 
                 <input type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                 <label className='form-check-label' htmlFor="flexRadioDefault1">
                 {options[0]}
                 </label>
                 </div>

                 <div className='border p-2 rounded'>
                 <input type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                 <label className='form-check-label' htmlFor="flexRadioDefault2">
                 {options[1]}
                 </label>
                 </div>

                <div className='border p-2 rounded'>
                <input type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                 <label className='form-check-label' htmlFor="flexRadioDefault3">
                 {options[2]}
                 </label>
                </div>

                 <div className='border p-2 rounded'>
                 <input type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                 <label className='form-check-label' htmlFor="flexRadioDefault4">
                 {options[3]}
                 </label>

                 </div>
               </div>
          </div>
        </div>
    );
};

export default Quiz;