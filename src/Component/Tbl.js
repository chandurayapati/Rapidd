import React from "react";
import './Tbl.css'

const Tbl = ({ item, ind }) => {
  let cn = "green";
  if (Number(item.ttime) < 100) {
    cn = "red";
    console.log(item.ttime, cn);
  }
  console.log(ind,"ind")
  return (
    <tr className={cn}>
      <td>{ind+1}</td>
      <td>{item.key}</td>
      <td>{item.ttime}</td>
    </tr>
  );
};

export default Tbl;
