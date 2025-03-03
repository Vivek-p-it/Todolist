import React, {useState} from 'react'
import './App.css'

function Todo() {
    const [Task,setTask] = useState([])
    const [Task1,rmTask] = useState([])
    function ATask(){
        let v = document.getElementById("inp").value;
        if(v===''){
            alert("Please enter some Tasks");
        }
        else{
        setTask([...Task,v])
        document.getElementById("res").innerHTML += "\n"+v;
        document.getElementById("inp").value = '';
        }
    }
    function RTask(){
        let v1 = Task.slice(-1);
        setTask(Task.slice(0,-1));
        rmTask([...Task1,v1])
        //document.getElementById("res1").innerHTML = "\n"+v1;
    }
  return (
    <div>
        <h1>TO DO List</h1>
        <input type="text" id ="inp" placeholder='Enter any Task value'/>
        <button onClick={ATask}>Add</button>
        <br/>
        <br/>
        <h2>List of added Tasks</h2>
        <output id ="res"></output>
        <br/><br/>
        <h1>Main List</h1>
        {Task.map((x,index)=><li key={index}>{x}</li>)}
        <br/><br/>
        <button onClick={RTask}>Remove</button>
        <h2>Removed Tasks</h2>
        {Task1.map((x,index)=><li key={index}>{x}</li>)}
        <output id ="res1"></output><br/><br/>
    </div>
  )
}

export default Todo