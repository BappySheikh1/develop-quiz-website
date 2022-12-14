import React from 'react';
import './Quiz.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEye } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';
import ToastComponent from '../ToastComponent/ToastComponent';


const Quiz = ({cardQuiz,idx}) => {
    const questionCount=idx + 1 ;
    
    const {question,options,correctAnswer}=cardQuiz
    const handlerClilkCurrectAns=()=>{
        toast.info(correctAnswer,{autoClose: 1000})
    }

    const handlerCheckAnswer=(option)=>{
        if(option === correctAnswer){
         return toast.success(correctAnswer ,{autoClose: 1000})
        }
        else{
            return toast.error("Not Currect Answer" ,{autoClose: 1000})
        }
        }

       

    return (
        <div className='mt-5 '>
            <div id='quiz-container' className='w-75 m-auto py-5 border  my-4 shadow-lg'>
                <div className='d-flex justify-content-between'>
                <h5 className='m-auto'><span>Quiz-{questionCount}</span> {question}</h5>
                <div className='p-2'>
                    <FontAwesomeIcon onClick={handlerClilkCurrectAns} className='currectIcon' icon={faEye}/>
                </div>
                </div>
    
               <div id='quiz-box'>
                   {
                    options.map((option,idx) => <ToastComponent key={idx} option={option} idx={idx} handlerCheckAnswer={handlerCheckAnswer} /> )
                   }
               </div>
          </div>
        </div>
    );
};

export default Quiz;
