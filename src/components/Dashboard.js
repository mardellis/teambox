import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import TaskManager from './TaskManager';
import FileSharing from './FileSharing';
import TeamChat from './TeamChat';
import TimeTracker from './TimeTracker';
import Calendar from './Calendar';

const Dashboard = () => {
  const paperStyle = { padding: 20, height: '100%' };

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h3" gutterBottom>
        Team Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper style={paperStyle}>
            <TaskManager />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={paperStyle}>
            <FileSharing />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={paperStyle}>
            <TeamChat />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={paperStyle}>
            <TimeTracker />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={paperStyle}>
            <Calendar />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
