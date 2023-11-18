import React,{useState} from 'react';
const App=()=>{
const [num1,setNum1]=useState("");
const[num2,setNum2]=useState("");
const [data,setData]=useState("");
const [error,setError]=useState("");
function implement1(e){
  e.preventDefault();
   if(!num1||!num2){
   setError("all fields are mandatory!");
   }
   else{
    setData(parseInt(num1)+parseInt(num2));
    setError("")
   }
}
function implement2(e){
  e.preventDefault();
  if(!num1||!num2){
  setError("all fields are mandatory!");
  }
  else{
   setData(parseInt(num1)-parseInt(num2));
   setError("")
  }
}
function implement3(e){
  e.preventDefault();
  if(!num1||!num2){
  setError("all fields are mandatory!");
  }
  else{
   setData(parseInt(num1)*parseInt(num2));
   setError("")
  }
}
function implement4(e){
  e.preventDefault();
  if(!num1||!num2){
  setError("all fields are mandatory!");
  }
  else{
   setData(Math.floor(parseInt(num1)/parseInt(num2)));
   setError("")
  }
}
  return(
    <div className="form">
      <h1>React Calculator</h1>
      <form>
        <input type="number" placeholder="num1" onChange={(e)=>setNum1(e.target.value)} value={num1}/><br/>
        <input type="number" placeholder="num2" onChange={(e)=>setNum2(e.target.value)} value={num2}/><br/>
        <button onClick={implement1}>+</button>
        <button onClick={implement2}>-</button>
        <button onClick={implement3}>*</button>
        <button onClick={implement4}>/</button>
      </form>
      <p className="red">{error}</p>
      <p>result:{data}</p>
    </div>
  )
}
export default App;