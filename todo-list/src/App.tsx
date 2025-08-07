import React, { useRef, useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos]= useState<any[]>([])
  const inputRef= useRef<HTMLInputElement>(null)
  const addToDoList= ()=>{
    if(inputRef.current){
      const text= inputRef.current.value;
      const newItem= {completed: false, text};

      setTodos([...todos, newItem])
      inputRef.current.value=''
    }


  }

  const handleItemDone= (index:any)=>{
    const newTodos= [...todos]
    newTodos[index].completed= !newTodos[index].completed
    setTodos(newTodos)
    
  }

  const removeitem= (index:any)=>{
    const newTodos= [...todos];
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
 <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow rounded-4 p-4 bg-light">
            <h2 className=" todo text-center mb-4 text-success">📝 My To-Do List</h2>

            <div className="input-group mb-3">
              <input
               ref={inputRef}
                type="text"
                className="form-control"
                placeholder="Enter a task..."
               
              />
              <button className="btn btn-success" onClick={addToDoList}>
                Add
              </button>
            </div>

            <ul className="list-group">
              {todos.map(({text,completed}, index)=>{
                return (
                  <div className="items d-flex justify-content-center">
                    <li key={index} className={completed?"done ":"list-group-item d-flex justify-content-between align-items-center w-75"}
                onClick={()=>handleItemDone(index)}
                >
                  ✏️{text}

                </li>
               <span> <button className="btn btn-sm btn-danger ms-3 mt-1" onClick={()=>removeitem(index)}>
                    Remove
                  </button></span>
                  </div>
                )
              })}
              
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};



export default App;
