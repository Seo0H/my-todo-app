/* eslint-disable react-hooks/exhaustive-deps */
import palette from "../../lib/styles/palette";
import styled from "styled-components";
import TodoCreateBox from "../../components/todo/TodoCreateBox";
import TodoListBox from "../../components/todo/TodoListBox";
import { useCallback, useEffect } from "react";
import TodoHeader from "../../components/todo/TodoHeader";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  createTodoApi,
  deleteTodoApi,
  getTodosApi,
  updateTodoApi,
} from "../../lib/api/todo";

const TodoListBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 2rem;
    margin-top: 1rem;
    font-weight: 900;
    font-size: 28px;
  }
`;

/**
 * @components `TodolistForm` : `TodoForm`에서 필요한 정보를 받아와 해당 컴포넌트에 props로 전달합니다.
 */
function TodoListForm() {
  const navigate = useNavigate();
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

  /* todo create handler */
  const onCreate = useCallback(
    async (todo) => {
      if (!todo) return;
      try {
        await createTodoApi(todo);
        await getTodo();
      } catch ({ response: { data } }) {
        alert(data.message);
      }
    },
    [todos]
  );

  /* todo remove handler */
  const onRemove = useCallback(
    async (id, e) => {
      await deleteTodoApi(id);
      await getTodo();
    },
    [todos]
  );

  /* todo update( checkbox, modify ) handler */
  const onUpdate = useCallback(
    async ({ id, todo, isCompleted }) => {
      await updateTodoApi(id, todo, isCompleted);
      await getTodo();
    },
    [todos]
  );

  const onLogount = (e) => {
    localStorage.clear();
    alert("로그아웃 되었습니다");
    navigate("/signin");
  };

  return (
    <TodoListBlock>
      <TodoHeader onLogount={onLogount} />
      <h3>TO-DO List</h3>
      <TodoCreateBox onCreate={onCreate} />
      {todos.map((todo) => (
        <TodoListBox
          key={todo.id}
          todo={todo}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      ))}
    </TodoListBlock>
  );
}

export default TodoListForm;
