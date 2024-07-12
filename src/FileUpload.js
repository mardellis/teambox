import React, { useState } from 'react';
import axios from 'axios';
import { Button, Typography, LinearProgress, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

function FileUpload() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    axios.post('http://localhost:5000/upload', formData)
      .then(response => {
        setUploading(false);
        setSuccess(true);
        console.log('File uploaded successfully:', response.data);
      })
      .catch(error => {
        setUploading(false);
        setError(true);
        console.error('Error uploading file:', error.response ? error.response.data : error.message);
      });
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        File Upload
      </Typography>
      <input
        accept="*/*"
        style={{ display: 'none' }}
        id="raised-button-file"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="raised-button-file">
        <Button variant="contained" color="primary" component="span">
          Select File
        </Button>
      </label>
      {file && (
        <Typography variant="body1" gutterBottom>
          {file.name}
        </Typography>
      )}
      <Button
        variant="contained"
        color="secondary"
        onClick={handleFileUpload}
        disabled={uploading}
        style={{ marginTop: 20 }}
      >
        Upload File
      </Button>
      {uploading && <LinearProgress style={{ marginTop: 20 }} />}
      <Snackbar open={success} autoHideDuration={6000} onClose={() => setSuccess(false)}>
        <Alert onClose={() => setSuccess(false)} severity="success">
          File uploaded successfully!
        </Alert>
      </Snackbar>
      <Snackbar open={error} autoHideDuration={6000} onClose={() => setError(false)}>
        <Alert onClose={() => setError(false)} severity="error">
          Error uploading file. Please try again.
        </Alert>
      </Snackbar>
    </div>
  );
}

export default FileUpload;
