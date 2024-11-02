import { useState } from "react";

function Apple()
{
  const[apples,setapples]=useState(0)
  return (
    <>
    <h1>Number Of Apples:{apples}</h1>
    {apples===0 ? (<p>No apples left</p>):(<p>great ! you have some apples</p>)}
    <button onClick={()=>setapples(apples+1)}>Add 1 Apple</button>
    <button onClick={()=> apples>0 && setapples(apples-1)}>remove 1 Apple</button>
    <button onClick={()=>setapples(0)}>reset</button>
    </>
  )
}
export default Apple;