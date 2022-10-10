import React from 'react';
import './Quiz.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEye } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';


const Quiz = ({cardQuiz}) => {
    // console.log(cardQuiz)
    
    const {question,options,correctAnswer}=cardQuiz

    const handlerClilkCurrectAns=()=>{
        toast.info(correctAnswer,{autoClose: 1000})
    }
    return (
        <div className='mt-5'>
            <div className='w-75 m-auto py-5 border rounded my-4 shadow-sm'>
                <div className='d-flex justify-content-between'>
                <h5 className='m-auto'>Quiz-1:{question}</h5>
                <div className='p-2'>
                    <FontAwesomeIcon onClick={handlerClilkCurrectAns} className='currectIcon' icon={faEye}/>
                </div>
                </div>
               <div className=' form-check quiz-box'>
                 <div className='border p-2 rounded '> 
                 <label className='form-check-label' htmlFor="flexRadioDefault1">
                 <input type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                 {options[0]}
                 </label>
                 </div>

                 <div className='border p-2 rounded'> 
                 <label className='form-check-label' htmlFor="flexRadioDefault2">
                 <input type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                 {options[1]}
                 </label>
                 </div>

                <div className='border p-2 rounded'>  
                 <label className='form-check-label' htmlFor="flexRadioDefault3">
                 <input type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                 {options[2]}
                 </label>
                </div>

                 <div className='border p-2 rounded'>  
                 <label className='form-check-label' htmlFor="flexRadioDefault4">
                 <input type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
                 {options[3]}
                 </label>

                 </div>
               </div>
          </div>
        </div>
    );
};

export default Quiz;