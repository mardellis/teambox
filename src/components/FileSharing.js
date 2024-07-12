import React from 'react';
import { Typography } from '@material-ui/core';
import FileUpload from '../FileUpload'; // Corrected import path

const FileSharing = () => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        File Sharing
      </Typography>
      <FileUpload />
      {/* Add more file sharing UI elements here */}
    </div>
  );
};

export default FileSharing;
