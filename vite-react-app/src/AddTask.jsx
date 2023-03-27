import React, { useState } from 'react';

function AddTask({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const newTask = { title, description };
    fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })
      .then(response => response.json())
      .then(data => onAddTask(data))
      .catch(error => console.error(error));
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <h2>Add Task</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <textarea value={description} onChange={e => setDescription(e.target.value)} />
        </label>
        <br />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
