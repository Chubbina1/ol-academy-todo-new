import React,{useState} from "react";
import Buttons from "./Buttons";
import InputComponent from "./Input";
import Footer from "./Footer";

import "../Styles/style.css";


const Todo = () =>{
  const [newtext, setNewText] = useState([
    { text: "Learn React", id: 1, isDone: false },
    { text: "Learn Node", id: 2, isDone: false },
    ]);

    const [inputValue, setInputValue] = useState("");
    const [editId, setEditId] = useState(null);
    const [editValue, setEditValue] = useState("");


  const handleonTodo=()=> {
    if(inputValue.trim===""){
      return;
    }
  

    const isDuplicate=newtext.some(
    (task)=>task.text.toLocaleLowerCase()===inputValue.toLocaleLowerCase()
    );
    if(isDuplicate){
    alert("There is a task already used with this name: " + inputValue);
    return;
  }

    const useid = newtext.map((Todo)=>Todo.id);
    let newId = 0;
    if (useid.length > 0){
      newId=Math.max(...useid) + 1;
    }

    setNewText([
      ...newtext,
      {text: inputValue, id: newId, isDone: false},
    ]);
    setInputValue("");
};

const handledelete=()=>{
  const choosenid=newtext.filter((Todo)=>Todo.id !==id);
  setNewText(choosenid);
};

const handleComplete=()=>{
  setNewText((prevText)=>{
    const updatedTasks=prevText.map((task)=>{
      if(task.id===id){
        return{...task, isDone:!task.isDone};
      }
      return task;
    });
    return updatedTasks;
  });
};

const handleEditChange=(event)=>{
  setEditValue(event.target.value);
};

const handleSaveEdit=()=>{
  setNewText((prevText)=>{
    const updatedTasks=prevText.map((task)=>{
      if(task.id===editId){
        return{...task,text:editValue};
      }
      return task;
    });
    setEditId(null);
    setEditValue("");
    return updatedTasks;
  });
};

const handleCheckboxChange=(id)=>{
    setNewText((prevText)=>{
      const updatedTasks = prevText.map((task)=>{
        if(task.id===id){
          return{...task, isDone: !task.isDone};
        }
        return task;
      });
      return updatedTasks;
    });
};

const handleMoveUp=(index)=>{
  if(index>0){
    const updatedTasks=[...newtext];
    const temp = updatedTasks[index];
    updatedTasks[index]=updatedTasks[index-1];
    updatedTasks[index-1]=temp;
    setNewText(updatedTasks);
  }
};

const handleMoveDown=(index)=>{
  if(index<newtext.length-1){
    const updatedTasks=[...newtext];
    const temp = updatedTasks[index];
    updatedTasks[index]=updatedTasks[index+1];
    updatedTasks[index+1]=temp;
    setNewText(updatedTasks);
  }
};

const handleDeleteAll=()=>{
  setNewText([]);
};

const handleChangeInputValue=(event)=>{
  setInputValue(event.target.value);
};

const handleDeleteCompleted=()=>{
  const updatedTasks=newtext.filter((task)=>
    !task.isDone
  );
  setNewText(updatedTasks);
};


return (
      <div className="div">
        <h1 className="title">Todo List</h1>
        {setNewText?.length > 0 ? (
          <div className="div">
            <ul className="sia">
              {setNewText.map((task, index) => (
                <li
                  key={task.id}
                  style={{
                    textDecoration: task.isDone ? "line-through" : "none",
                    color: task.isDone ? "red" : "black",
                  }}
                >
                  <input
                    type="checkbox"
                    checked={task.isDone}
                    onChange={() => handleCheckboxChange(task.id)}
                  />
                  {this.state.editId === task.id ? (
                    <InputComponent
                      editValue={setEditValue}
                      handleEditChange
                      handleSaveEdit
                    />
                  ) : (
                    <Buttons
                      task
                      index
                      newtext={setNewText}
                      handleComplete
                      handledelete
                      handleEdit
                      handleMoveUp
                      handleMoveDown

                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>NO Items Found</p>
        )}

        <Footer handleonTodo
         handleDeleteAll
         handleDeleteCompleted
         inputValue
         handleChangeInputValue
         />
      </div>
    );
        }
export default Todo;
