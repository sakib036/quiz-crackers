import React from 'react';
import {useLoaderData} from 'react-router-dom';
import ReChart from '../ReChart/ReChart';
import StatisticsTable from '../StatisticsTable/StatisticsTable';

const Statistics = () => {
    const quizItems=useLoaderData();
    const{data}=quizItems;
    return (
        <div className='bg-gray-300 '>
            <h1 className='text-xl md:text-5xl text-center'>Catechize Game Online Quiz Test</h1>
             {
               data.map(item=><StatisticsTable
                key={item.id}
                item={item} 
               ></StatisticsTable>)
               
                
             }
           <ReChart data={data}></ReChart>
        </div>
    );
};

export default Statistics;