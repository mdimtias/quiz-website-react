import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Quizes from '../Quizes/Quizes';

const Quiz = () => {
    let { id } = useParams();
    const [data, setData] = useState([]);
    const [name, setName] = useState([]);
    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/quiz/${id}`)
        .then(res=>res.json())
        .then(data=> {
            return (setData(data.data.questions), setName(data.data))
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <div className="container">
            <h1 className="text-center mb-5">{name.name} Quiz</h1>
           {data.map(question=><Quizes quizQuestion={question} key={question.id}></Quizes>)}
        </div>
    );
};

export default Quiz;