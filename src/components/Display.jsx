import React, { useState } from 'react'

export const Display = () => {
    {/*const [color,setColor]=useState("red");
    const [count,setCount]=useState(0);

    const counting=()=>{
        setCount(count+1);
    }*/}

    {/*const [data,setData]=useState(["yellow","green","brown","black"]);*/}
    const [data,setData]=useState([{rollno:131,name:"raghav",branch:"computer"},
        {rollno:131,name:"raghav",branch:"computer"},
        {rollno:131,name:"raghav",branch:"computer"}]
    );
    const style={
        backgroundColor:"yellow",
        color:"black",
        border:"2px solid black",
        padding:"20px",
        margin:"20px"
    }
  return (
    <>
    
    {/*<div>
        <h1 style={{color:color}}>hello {count}</h1>
        </div>
        <p>
            <input type="button" name="" value="green" id="" onClick={()=>{setColor("green")}}/>
            <button onClick={()=>{setColor("yellow")}}>yellow</button>
            <button onClick={()=>{setColor("blue")}}>blue</button>
            <button onClick={counting}>counting</button>
        </p>*/}
       
          {/*}   {data.map((items)=>{
            return <div style={style}>{items}</div>
          })}*/}
          {/* {data.map((i)=>{
            return <div style={style}>{i.rollno}-{i.name}-{i.branch}</div>
           })}*/}
           {/*<div style={style}>{data["rollno"]}-{data["name"]}-{data["branch"]}</div>*/}
         {data.map((i)=>{
          return( <table style={{border:"2px solid black",borderCollapse:"collapse"}}>
                <tr>
                    <td style={{border:"2px solid black",padding:"40px"}}>{i.rollno}</td>
                    <td style={{border:"2px solid black",padding:"40px"}}>{i.name}</td>
                    <td style={{border:"2px solid black",padding:"40px"}}>{i.branch}</td>
                </tr>
            </table>
          );
           })}
        
    </>
  )
}
