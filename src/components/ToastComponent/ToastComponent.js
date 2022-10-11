import React from 'react';
import { toast } from 'react-toastify';

const ToastComponent = ({option,handlerCheckAnswer}) => {
    

    return (
        <div>
             <div onClick={()=>handlerCheckAnswer(option)} className='border border-primary p-2 rounded boxHover'> 
                 <label className='form-check-label' htmlFor="flexRadioDefault1">
                 <input type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                 {option}
                 </label>
                 </div>
        </div>
    );
};

export default ToastComponent;