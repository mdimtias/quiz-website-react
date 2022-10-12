import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Quizes.css';
const Quizes = ({quizQuestion}) => {
    const {question, options, correctAnswer} = quizQuestion;
    
	const clickBtn = (value, correctAnswer, e)=>{
		if(value === correctAnswer){
            toast.success('Correct Answer!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
		}else{
            toast.warn('Wrong Answer!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
		}

        
	}
    return (
        <div className="questions">
            <h2 className="question">{question}</h2>
            <ToastContainer />
            <form action="" className="question-list" name="">
            <ul>
                <div className="option d-flex">
                    <button onClick={()=>{return clickBtn(options[0], correctAnswer)}}><input type="checkbox" name="" id="" /></button>
                    <li name="" className="question-item">{options[0]}</li>
                </div>
                <div className="option d-flex">
                <button onClick={()=>clickBtn(options[1], correctAnswer)}> <input type="checkbox" name="" id="" /></button>
                    <li name="" className="question-item">{options[1]}</li>
                </div>
                <div className="option d-flex">
                <button onClick={()=>clickBtn(options[2], correctAnswer)}><input type="checkbox" name="" id="" /></button>
                    <li className="question-item">{options[2]}</li>
                </div>
                <div className="option d-flex">
                <button onClick={()=>clickBtn(options[3], correctAnswer)}><input type="checkbox" name="" id="" /></button>
                    <li className="question-item">{options[3]}</li>
                </div>
            </ul>
            </form>
            
        </div>
    );
};

export default Quizes;
