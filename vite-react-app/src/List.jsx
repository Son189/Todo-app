import React, { useState, useEffect } from 'react';
import Search from './Search';

function List() {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/todos')
      .then(response => response.json())
      .then(tasks => {
        setTasks(tasks);
        setFilteredTasks(tasks);
      })
      .catch(error => console.error(error));
  }, []);

  const handleSearchResults = tasks => {
    setFilteredTasks(tasks);
  };

  const handleDeleteTask = id => {
    fetch(`http://localhost:3000/todos${id}`, { method: 'DELETE' })
      .then(response => {
        if (response.ok) {
          setTasks(tasks.filter(task => task.id !== id));
          setFilteredTasks(filteredTasks.filter(task => task.id !== id));
        } else {
          throw new Error('Failed to delete task.');
        }
      })
      .catch(error => console.error(error));
  };

  const taskList = filteredTasks.map(task => (
    <div key={task.id}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
    </div>
  ));

  return (
    <div>
      <h2>All Tasks</h2>
      <Search onSearchResults={handleSearchResults} />
      {taskList}
    </div>
  );
}

export default List;


