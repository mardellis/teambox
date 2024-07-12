import React, { useState } from 'react';
import { Typography, TextField, Button, List, ListItem, ListItemText, Paper } from '@material-ui/core';

const TeamChat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message) {
      setMessages([...messages, message]);
      setMessage('');
    }
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Team Chat
      </Typography>
      <TextField 
        label="Message" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        fullWidth 
        variant="outlined" 
        margin="normal"
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleSendMessage} 
        style={{ marginTop: 10 }}
      >
        Send
      </Button>
      <List>
        {messages.map((msg, index) => (
          <ListItem key={index}>
            <ListItemText primary={msg} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TeamChat;
