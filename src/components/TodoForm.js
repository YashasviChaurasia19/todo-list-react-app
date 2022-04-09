import React, {useState,useRef,useEffect} from 'react'

function TodoForm(props) {


    const inputRef=useRef(null)
     
    useEffect(()=>{
        inputRef.current.focus();
    });

    const[input,setInput] =useState(props.edit ? props.edit.value:'');
 
   
    const hendleChange = e=>(
        setInput(e.target.value));
        
        const hendleSubmit= e=>{
            e.preventDefault(); 
            
        
    props.onSubmit({
          id:Math.floor(Math.random()*10000),
           text:input 
              });

         setInput('');
              
        };
   
    
    return (
        
        <form className="todo-form" onSubmit={hendleSubmit  }>
        {props.edit?
        (<>
        <input type="text" placeholder=" ✍update to todo "
          value ={input}
         name="text"
         onChange={hendleChange}
         className="todo-input"
          ref ={inputRef}/>
         <button className="todo-button"> update</button></>):
         
         (<> <input type="text" placeholder=" ✍ add to todo "
          value ={input}
         name="text"
         onChange={hendleChange}
         className="todo-input"
          ref ={inputRef}/>
         <button className="todo-button"> Add TODO</button></>)}
        
        </form>
    );
}

export default TodoForm
