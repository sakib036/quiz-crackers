import React from 'react';
import bodyheader from '../../images/header.png'
import './BodyHeader.css'

const BodyHeader = () => {
    return (
        <div className=' bg-gradient-to-r from-violet-500 to-gray-700 flex flex-col md:flex-row items-center '>
            <div className='md:w-1/3 ml-10'>
                <img className='h-60 w-full' src={bodyheader} alt="" />
            </div>
            <div className='text-white mx-6 md:w-1/2'>
                <h1 className='text-5xl'>Best Online Quizzes</h1>
                <p>Keeping yourself entertained and educated is just a quiz away. Want to have some game or learn about a topic? Curated to learn while having fun, our online quizzes are an excellent source of knowledge and entertainment. Take a quiz today to discover amazing facts about yourself or the world.</p>

            </div>
        </div>
    );
};

export default BodyHeader;