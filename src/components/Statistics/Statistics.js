import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Statistics = () => {
    const { data } = useLoaderData()
    console.log(data)


    return (
        <div className=''>
            <div>
            <h1 className='text-4xl py-8'>Quiz Quantity Charts</h1>
            <ResponsiveContainer width='95%' height={400}>
            <LineChart data={data} margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
            </ResponsiveContainer>
           
            </div>

        </div>
    );
};

export default Statistics;