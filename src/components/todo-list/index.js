import {useEffect, useState} from "react";
import {useLocalStorage} from "usehooks-ts";
import TodoItem from "../todo-item";

function TodoList() {
  const [todos, setTodos] = useState([]);

// Define a function getTodos to fetch todos from todo-api
const getTodos = async () => {
  // Use fetch to get todos from API
  const response = await fetch ('http://localhost:4000/todos');
  const data = await response.json();
  console.log(data);
  // Update todos state
  setTodos(data);
}

const deleteTodos = async () => {
  // Use fetch to delete todos from api
  const response = await fetch('http://localhost:4000/todos', {
      method: 'DELETE',
    });
    const data = await response.json();
    console.log(data);
}

useEffect(() => {
  getTodos();
}, []);

    return (
      <section>
        <button className="btn btn-danger"
        onClick={deleteTodos}
        >Clear Todos</button>
        
      <ul className="list-group" > 
        {todos.map(function (todo, index) {
          return <TodoItem key={todo._id} mytodo={todo.title} myindex={index} />;
        })}
     </ul>
     </section>
    );
      }
  
  export default TodoList;
  