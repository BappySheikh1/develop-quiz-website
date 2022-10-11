import React from 'react';

const ToastComponent = ({option,handlerCheckAnswer}) => {
    

    return (
        <div>
             <div onClick={()=>handlerCheckAnswer(option)} className='border border-primary p-2 rounded boxHover quiz'> 
                 {option}
                 </div>
        </div>
    );
};

export default ToastComponent;