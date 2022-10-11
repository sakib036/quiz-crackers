import React from 'react';
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid'

const QuizItem = ({ item }) => {
    console.log(item)
    const { id, logo, name, total } = item;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl ">
                <figure><img  src={logo} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Total No of Quiz : {total}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary w-full">Buy Now <ArrowSmallRightIcon className="h-6 w-6"/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuizItem;