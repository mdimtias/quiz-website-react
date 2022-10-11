import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Quizes from '../Quizes/Quizes';

const Quiz = () => {
    let { id } = useParams();
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/quiz/${id}`)
        .then(res=>res.json())
        .then(data=>setData(data.data.questions))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <div className="container">
           {data.map(question=><Quizes quizQuestion={question} key={question.id}></Quizes>)}
        </div>
    );
};

export default Quiz;