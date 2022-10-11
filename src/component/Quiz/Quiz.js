import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';



const Quiz = () => {
    const {data}=useLoaderData();
    const {questions,name}=data;
    const handleAnswer=(id)=>{
        const rightAnswer=questions.find(question=>question.id===id);
        const {correctAnswer}=rightAnswer;
        alert (correctAnswer);
        
      }
    return (
        <div>
            <h1 className='text-5xl text-center my-6 font-bold'>Quiz of {name}</h1>
            <div className=' mx-6 md:w-2/3 md:mx-auto'>
            {
                questions.map(question=><Question 
                    key={question.id}
                    question={question}
                    handleAnswer={handleAnswer}
                ></Question>)
            }
            </div>
        </div>
    );
};

export default Quiz;