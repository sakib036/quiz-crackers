import React from 'react';
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom';

const QuizItem = ({ item }) => {
    const { id, logo, name, total } = item;
    const navigate=useNavigate();
    const handleStart=()=>{
        navigate(`/home/${id}`)
    }
    
    return (
        <div>
            <div className="card  bg-gray shadow-xl ">
                <figure><img  src={logo} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Total No of Quiz : {total}</p>
                    <div className="card-actions justify-end">
                        <button onClick={handleStart} className="btn btn-primary w-full">Start <ArrowSmallRightIcon className="h-6 w-6"/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizItem;