import React, { useState } from 'react';

export default function TodoForm({ addTodo }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTodo({ title, description, category, dueDate, completed: false });
    setTitle('');
    setDescription('');
    setCategory('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3 border p-3 rounded shadow-sm">
      <input
        type="text"
        placeholder="Başlık"
        className="form-control mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Açıklama"
        className="form-control mb-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Kategori"
        className="form-control mb-2"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="date"
        className="form-control mb-2"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button className="btn btn-primary w-100">Görev Ekle</button>
    </form>
  );
}