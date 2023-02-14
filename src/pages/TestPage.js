import { useEffect } from "react";
import { useState } from "react";
import { getTodosApi } from "../lib/api/todo";

const TestPage = () => {

  const [todos, setTodos] = useState([]);

  async function getTodo() {
    try {
      const { data: todos } = await getTodosApi();
      setTodos([...todos]);
    } catch ({ response: { data } }) {
      alert(data.message);
    }
  }

  /* first render */
  useEffect(() => {
    getTodo();
  }, []);
  useEffect(() => {
    if (todos.length > 0) {
      todos.sort((a, b) => {
        if (a.isCompleted > b.isCompleted) {
          return 1;
        }
        if (a.isCompleted < b.isCompleted) {
          return -1;
        }
      });
      console.log(todos);
    }
  }, [todos]);

  return (
    <>
      {/* {todos.map((todo) => (
        <div key={todo.id}>
          <a>{todo.todo}</a> <br />
          <a>{toString(todo.isCompleted)}</a> <br />
        </div>
      ))} */}
    </>
  );
};

export default TestPage;
