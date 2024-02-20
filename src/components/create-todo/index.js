import styles from "./index.module.css";
import { useLocalStorage } from "usehooks-ts";
import { useState } from "react";

function CreateTodo() {
  const [todos, setTodos] = useLocalStorage("TODO_KEY", []);

  // let todo;
  const [todo, setTodo] = useState("");

  // function collectInput(event) {
  //   // todo = event.target.value;
  //   setTodo(event.target.value);
  // }

  //const collectInput = event => setTodo(event.target.value);

  function saveTodo() {
    // // Add new todo to existing list
    // todos.push(todo);
    // Set all todos in local storage
    console.log(todo);
    console.log([...todos, todo]);

    // setTodos([...todos, todo]);
  }

  return (
    <section className={styles.createTodoSection}>
      <input
        onChange={event => setTodo(event.target.value)}

        className={styles.createTodoInput}
        placeholder="Start typing..." />
      <button 
      className={`btn ${styles.btn}`}
      onClick={() => setTodos([...todos, todo])}
      >Create</button>
    </section>
  );
}

export default CreateTodo;