import React, { useState, useEffect } from 'react';
import { Typography, Button, Paper } from '@material-ui/core';

const TimeTracker = () => {
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let timer;
    if (startTime) {
      timer = setInterval(() => {
        setElapsedTime(Date.now() - startTime);
      }, 1000);
    } else if (!startTime && elapsedTime !== 0) {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [startTime, elapsedTime]);

  const handleStart = () => {
    setStartTime(Date.now() - elapsedTime);
  };

  const handleStop = () => {
    setStartTime(null);
  };

  const handleReset = () => {
    setStartTime(null);
    setElapsedTime(0);
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Time Tracker
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleStart} 
        style={{ marginRight: 10 }}
      >
        Start Timer
      </Button>
      <Button 
        variant="contained" 
        color="secondary" 
        onClick={handleStop}
        style={{ marginRight: 10 }}
      >
        Stop Timer
      </Button>
      <Button 
        variant="contained" 
        onClick={handleReset}
      >
        Reset Timer
      </Button>
      <Typography variant="body1" gutterBottom style={{ marginTop: 20 }}>
        Elapsed Time: {Math.round(elapsedTime / 1000)} seconds
      </Typography>
    </div>
  );
};

export default TimeTracker;
