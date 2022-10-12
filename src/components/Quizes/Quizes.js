import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Quizes.css';
const Quizes = ({quizQuestion}) => {
    const {question, options, correctAnswer} = quizQuestion;
    const [name, setName] = useState([]);
    const {id} = useParams();
	console.log(id);
    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/quiz/${id}`)
        .then(res=>res.json())
        .then(data=>console.log(data.data.name))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
	const clickBtn = (value, correctAnswer)=>{
		if(value === correctAnswer){
			alert("Correct Answer");
		}else{
			alert("Wrong Answer");
		}
	}
    return (
        <div className="questions">
            <h1 className='mb-5'>{name}</h1>
            <h2 className="question">{question}</h2>
            <form action="" className="question-list">
            <ul>
                <div className="option d-flex">
                    <button onClick={()=>clickBtn(options[0], correctAnswer)}><input type="checkbox" name="" id="" /></button>
                    <li className="question-item">{options[0]}</li>
                </div>
                <div className="option d-flex">
                    <input type="checkbox" name="" id="" />
                    <li className="question-item">{options[1]}</li>
                </div>
                <div className="option d-flex">
                    <input type="checkbox" name="" id="" />
                    <li className="question-item">{options[2]}</li>
                </div>
                <div className="option d-flex">
                    <input type="checkbox" name="" id="" />
                    <li className="question-item">{options[3]}</li>
                </div>
            </ul>
            </form>
        </div>
    );
};

export default Quizes;