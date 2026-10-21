import React from 'react'
import One from './One';
import Two from './Two';
export default function Testing(props) {
     document.title=props.title;
  return (
   
    <>
    <h1>hello world</h1>
    <h1>{props.title}</h1>
    <div>
        <h1></h1>
        <One>
            <h1>who are you</h1>
            <h1>raghav</h1>
            <Two/>
         </One>
    </div> 
   
    </>
  )
}
