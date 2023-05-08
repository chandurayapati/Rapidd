import React, { useEffect, useState } from "react";
import arr from "./data";
import FTime from "./Component/FTime";
import Tbl from "./Component/Tbl";
import Pct from "./Component/Pct";
let App = () => {
  let [data, setData] = useState([...arr]);
  let [amap, setamap] = useState([]);
  let totalTime = [];

  let obj = {};

  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      if (obj[data[i].EmployeeName]) {
        obj[data[i].EmployeeName].push(data[i]);
      } else {
        obj[data[i].EmployeeName] = [data[i]];
      }
    }

    for (let key in obj) {
      let cdata = obj[key];
      let ttime = 0;

      for (let i = 0; i < cdata.length; i++) {
      ttime += FTime(cdata[i]);}
      ttime /= 60;
      totalTime.push({ ttime, key });
      setamap(totalTime)
    }
  }, []);

  return (
    <div>
      <table border='2'>
        <thead>
          <th>S.No</th>
          <th>Emp Name</th>
          <th>Time in hrs</th>
        </thead>
        <tbody> {amap.map((item, index) => 
        <Tbl item={item} ind={index} key={index }/>)} </tbody>
      </table>

    <Pct amap={amap} />


    </div>
  );
};

export default App;
