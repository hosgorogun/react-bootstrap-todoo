import React from 'react';

export default function Filter({ filter, setFilter }) {
  return (
    <div className="mb-3 d-flex justify-content-center gap-2">
      {['All', 'Completed', 'Pending'].map((f) => (
        <button
          key={f}
          className={`btn btn-sm ${filter === f ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => setFilter(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );
}