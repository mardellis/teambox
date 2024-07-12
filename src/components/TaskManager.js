import React, { useState } from 'react';
import { Typography, Button, TextField, List, ListItem, ListItemText, IconButton, Paper } from '@material-ui/core';
import { Delete, CheckCircle } from '@material-ui/icons';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const handleCompleteTask = (index) => {
    const newTasks = tasks.map((task, i) => i === index ? { ...task, completed: !task.completed } : task);
    setTasks(newTasks);
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Task Manager
      </Typography>
      <TextField 
        label="New Task" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        fullWidth 
        variant="outlined" 
        margin="normal"
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleAddTask} 
        style={{ marginTop: 10 }}
      >
        Add Task
      </Button>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <ListItemText 
              primary={task.text} 
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            />
            <IconButton onClick={() => handleCompleteTask(index)}>
              <CheckCircle color={task.completed ? 'primary' : 'disabled'} />
            </IconButton>
            <IconButton onClick={() => handleDeleteTask(index)}>
              <Delete />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TaskManager;
