import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ReChart = ({ data }) => {
    return (
        <div className='md:w-2/3 mx-auto'>
            
                <LineChart width={500} height={500} data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />

                </LineChart>
               

        </div>
    );
};

export default ReChart;