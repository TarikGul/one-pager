import React from 'react';

import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

const data = [
    {
        "name": "January", // This would always be formatted from a queried dataset
        "Successfully Paired": 78,
        "Active Users": 298,
        "amt": 200
    },
    {
        "name": "February",
        "Successfully Paired": 89,
        "Active Users": 480,
        "amt": 218
    },
    {
        "name": "March",
        "Successfully Paired": 150,
        "Active Users": 398,
        "amt": 250
    },
    {
        "name": "April",
        "Successfully Paired": 200,
        "Active Users": 240,
        "amt": 210
    },
    {
        "name": "May", 
        "Successfully Paired": 149,
        "Active Users": 530,
        "amt": 340
    },
    {
        "name": "June",
        "Successfully Paired": 109,
        "Active Users": 480,
        "amt": 320
    },
    {
        "name": "July",
        "Successfully Paired": 400,
        "Active Users": 1200,
        "amt": 390
    },
]

export const UserGrowth = () => {
    return (
        <div>
            <AreaChart width={630} height={350} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="Active Users" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="Successfully Paired" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
        </div>
    )
}