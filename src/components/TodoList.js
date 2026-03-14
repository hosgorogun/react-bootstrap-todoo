import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, deleteTodo, updateTodo, toggleComplete }) {
  if (todos.length === 0) {
    return <p className="text-center">Henüz görev yok!</p>;
  }

  return (
    <ul className="list-group">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
}