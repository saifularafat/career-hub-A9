import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";


const Statistics = () => {
    const assignmentMarks = [
        { id: 1, assignment_name: 'developer-portfolio', mark: 60, },
        { id: 2, assignment_name: 'g3-architects', mark: 60, },
        { id: 3, assignment_name: 'legal-solution', mark: 58, },
        { id: 4, assignment_name: 'javaScript sum-divided', mark: 52, },
        { id: 5, assignment_name: 'Interactive', mark: 57, },
        { id: 6, assignment_name: 'AI Universe Hub', mark: 58, },
        { id: 7, assignment_name: 'QUIZ HERO', mark: 59, },
        { id: 8, assignment_name: 'Knowledge Cafe', mark: 58, },
    ];

    return (
        <div className='text-center my-container bg-slate-300 p-10'>
            <p className='pb-8 text-2xl font-semibold text-slate-800'>All Assignment Result set:</p>
            <AreaChart className='mr-10'
                width={800}
                height={340}
                data={assignmentMarks}
                syncId="anyId"
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="assignment_name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </div>
    );
};

export default Statistics;