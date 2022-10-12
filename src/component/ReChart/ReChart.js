import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ReChart = ({ data }) => {
    return (
        
        <div  className=' md:w-2/3 mx-auto'>
            
            <ResponsiveContainer width="100%" height={500}>
                <LineChart width={500} height={500} data={data}>
                    <CartesianGrid stroke="#4aa86e" />
                    <XAxis stroke="#fc03e3" dataKey="name" />
                    <YAxis stroke="#fc03e3" />
                    <Tooltip />
                    <Line type="monotone" dataKey="total" stroke="#fc03e3" />

                </LineChart>
                </ResponsiveContainer>
                

        </div>
    );
};

export default ReChart;