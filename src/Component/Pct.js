
import React from 'react';
import { PieChart, Pie } from 'recharts';


const Pct = (amap) => {

  
    const data01 = amap.amap
    const data02 = amap.amap
    


    return (
        <PieChart width={700} height={700}>

            <Pie
                data={data01} dataKey="ttime" nameKey="key" label outerRadius={120} fill="green" />
                 <Pie
                data={data02} dataKey="ttime" nameKey="key"  outerRadius={120} fill="orange" />
        </PieChart>
    );
}

export default Pct;