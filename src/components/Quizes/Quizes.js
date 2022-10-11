import React from 'react';
import './Quizes.css';
const Quizes = ({quizQuestion}) => {
   
    const {question, options} = quizQuestion;
    console.log(options[0])
    return (
        <div className="questions">
            <h1 className="question">{question}</h1>
            <form action="" className="question-list">
            <ul>
                <div className="option d-flex">
                    <input type="checkbox" name="" id="" />
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