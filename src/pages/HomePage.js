import React, { useState, useEffect } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import Filter from "../components/filter";

export default function HomePage() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => setTodos([...todos, todo]);
  const deleteTodo = (index) => setTodos(todos.filter((_, i) => i !== index));
  const updateTodo = (index, newTodo) =>
    setTodos(todos.map((t, i) => (i === index ? newTodo : t)));
  const toggleComplete = (index) =>
    setTodos(todos.map((t, i) => (i === index ? { ...t, completed: !t.completed } : t)));

  const filteredTodos = todos.filter((todo) => {
    if (filter === "Completed") return todo.completed;
    if (filter === "Pending") return !todo.completed;
    return true;
  });

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Ogün Hoşgör Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <Filter filter={filter} setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}