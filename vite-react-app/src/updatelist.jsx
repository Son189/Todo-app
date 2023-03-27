import React, { useState } from 'react';

function UpdateTask({ task, onUpdateTask }) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleSubmit = event => {
    event.preventDefault();
    const updatedTask = { ...task, title, description };
    fetch(`/api/tasks/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    })
      .then(response => response.json())
      .then(data => onUpdateTask(data))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Update Task</h2>
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
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
}

export default UpdateTask;
