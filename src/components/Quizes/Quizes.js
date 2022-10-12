import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Quizes.css';
const Quizes = ({quizQuestion}) => {
    const {question, options, correctAnswer} = quizQuestion;
    const [answer, setAnswer] = useState([])
    
    const handelAnswer = (answer)=>{
        setAnswer((answer))
    }

	const clickBtn = (value, correctAnswer)=>{
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
            <div className="question-container">   
            <h2 className="question">{question}</h2>
            <button className="svg-btn" onClick={()=>handelAnswer(correctAnswer)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
            <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
            </svg></button>
            </div>

            <form action="" className="question-list" name="">
                <ToastContainer></ToastContainer>
            <ul>
                <h2 className="font-blod bg-primary">{answer}</h2>
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
