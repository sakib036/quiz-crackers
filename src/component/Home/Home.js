import React from 'react';
import BodyHeader from '../BodyHeaer/BodyHeader';
import {useLoaderData} from 'react-router-dom';
import QuizItem from '../QuizItem/QuizItem';

const Home = () => {
    const quizItems=useLoaderData();
    const{data}=quizItems;
    console.log(data);
    return (
        <div className='bg-gray-200'>
            <BodyHeader></BodyHeader>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 w-2/3 mx-auto my-5'>
            {
               data.map(item=><QuizItem
               key={item.id}
               item={item} 
               ></QuizItem>)
            }
            </div>
        </div>
    );
};

export default Home;