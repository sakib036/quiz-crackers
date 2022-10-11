import React from 'react';



const StatisticsTable = ({ item }) => {
    const { logo, name, total } = item;
    return (
        <div className='w-2/3 mx-auto'>
            <div className='flex w-full justify-between bg-slate-500 px-10 my-10'>
                <h1 className=' text-lg md:text-3xl text-white'>{name}</h1>
                <img className='w-10 h-10' src={logo} alt="" />
                <p className=' text-lg md:text-3xl text-white bg-purple-500 px-10 rounded-2xl'>{total}</p>
            </div>
            
        </div>
    );
};

export default StatisticsTable;