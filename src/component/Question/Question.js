
import React from 'react';

import { EyeIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Question = ({ question,handleAnswer }) => {
    // console.log(question)
    const { id, options,correctAnswer } = question;
    const [a, b, c, d] = options;
    // console.log(correctAnswer)
    const repQuestion = question.question;
    const newQuestion = repQuestion.replace('<p>', '').replace('</p>', '');


    const [selected, setSelected] = useState();
    // console.log(selected)
    const handleChange = (event, value) => {
        if(value===correctAnswer){
            alert ('Correct Answer');
        }
        else{
            alert('Sorry!Wrong Answer');
        }
    
        setSelected(value);

      };
     
    
    return (
        <div className='border border-pink-700 p-5 md:p-10 my-5 rounded-xl bg-slate-300 relative' >
            <EyeIcon  className="h-6 w-6 absolute top-0 right-0"  onClick={()=>handleAnswer(id)}/>
            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">{newQuestion}</h3>
            <ul className=" text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                    <div className="flex items-center pl-3">
                        <input id="list-radio-license" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onChange={()=>handleChange(id,a)} />
                        <label htmlFor="list-radio-license" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">{a}</label>
                    </div>
                </li>
                <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                    <div className="flex items-center pl-3">
                        <input id="list-radio-id" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onChange={()=>handleChange(id,b)}  />
                        <label htmlFor="list-radio-id" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">{b}</label>
                    </div>
                </li>
                <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                    <div className="flex items-center pl-3">
                        <input id="list-radio-millitary" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onChange={()=>handleChange(id,c)}  />
                        <label htmlFor="list-radio-millitary" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">{c}</label>
                    </div>
                </li>
                <li className="w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600">
                    <div className="flex items-center pl-3">
                        <input id="list-radio-passport" type="radio" value="" name="list-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" onChange={()=>handleChange(id,d)}  />
                        <label htmlFor="list-radio-passport" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">{d}</label>
                    </div>
                </li>
            </ul>

            <div>
            </div>


        </div>
    );
};

export default Question;