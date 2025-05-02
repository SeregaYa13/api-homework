// src/TodoList.jsx
import axios from "axios";
import React, { useEffect, useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Получаем задачи при загрузке компонента
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => {
        setTodos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка при получении задач:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-white">Загрузка задач...</p>;

  return (
    <div className="text-white">
      <h2 className="text-xl font-bold mb-2">Список задач:</h2>
      <ul className="list-disc pl-5">
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} {todo.completed ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
