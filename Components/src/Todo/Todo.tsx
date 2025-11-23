import { useState } from "react";
import "./index.css";
type TodoList = {
  id: string;
  name: string;
  isCompleted: boolean;
};
const Todo = () => {
  const [input, setInput] = useState<string>("");
  const [todo, setTodo] = useState<TodoList[]>([]);

  const addToDo = (input: string) => {
    if (input.trim() == "") {
      return;
    }
    setTodo([
      ...todo,
      {
        id: new Date().toString(),
        name: input.trim(),
        isCompleted: false,
      },
    ]);
    setInput("");
  };

  const deleteToDo = (id: string) => {
    const filteredTodo = todo.filter((item) => item.id !== id);
    setTodo(filteredTodo);
  };

  const handleCompleteTask = (id: string) => {
     const arr= todo.map((todo)=>{
        if(todo.id===id){
            return({
                ...todo,
                isCompleted:!todo.isCompleted
            })
        }
        else{
            return todo;
        }
     })
     setTodo(arr);
  };
  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder="Add To Do"
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addToDo(input)}>Add </button>
      {todo.map((item) => {
        return (
          <div className="todo-container">
            <input
              type="checkbox"
              checked={item.isCompleted}
              onClick={() => handleCompleteTask(item.id)}
            />
            <p>{item.name}</p>
            <button  className="todo-button"onClick={() => deleteToDo(item.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
