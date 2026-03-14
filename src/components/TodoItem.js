import React, { useState } from 'react';

export default function TodoItem({ todo, index, deleteTodo, updateTodo, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState({ ...todo });

  const handleUpdate = () => {
    updateTodo(index, editedTodo);
    setIsEditing(false);
  };

  return (
    <li className={`list-group-item mb-2 ${todo.completed ? 'bg-light text-decoration-line-through' : ''}`}>
      {isEditing ? (
        <div>
          <input
            type="text"
            className="form-control mb-1"
            value={editedTodo.title}
            onChange={(e) => setEditedTodo({ ...editedTodo, title: e.target.value })}
          />
          <textarea
            className="form-control mb-1"
            value={editedTodo.description}
            onChange={(e) => setEditedTodo({ ...editedTodo, description: e.target.value })}
          />
          <input
            type="text"
            className="form-control mb-1"
            value={editedTodo.category}
            onChange={(e) => setEditedTodo({ ...editedTodo, category: e.target.value })}
          />
          <input
            type="date"
            className="form-control mb-1"
            value={editedTodo.dueDate}
            onChange={(e) => setEditedTodo({ ...editedTodo, dueDate: e.target.value })}
          />
          <button className="btn btn-success btn-sm me-1" onClick={handleUpdate}>Kaydet</button>
          <button className="btn btn-secondary btn-sm" onClick={() => setIsEditing(false)}>İptal</button>
        </div>
      ) : (
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h5>{todo.title}</h5>
            {todo.description && <p>{todo.description}</p>}
            <small>Kategori: {todo.category || 'Yok'}</small><br/>
            <small>Bitiş Tarihi: {todo.dueDate || 'Belirtilmedi'}</small>
          </div>
          <div className="d-flex flex-column align-items-end">
            <button className="btn btn-sm btn-success mb-1" onClick={() => toggleComplete(index)}>
              {todo.completed ? 'Geri Al' : 'Tamamla'}
            </button>
            <button className="btn btn-sm btn-warning mb-1" onClick={() => setIsEditing(true)}>Düzenle</button>
            <button className="btn btn-sm btn-danger" onClick={() => deleteTodo(index)}>Sil</button>
          </div>
        </div>
      )}
    </li>
  );
}