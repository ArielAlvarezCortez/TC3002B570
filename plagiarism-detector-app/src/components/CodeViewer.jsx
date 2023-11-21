import React from 'react';

const CodeViewer = ({ code }) => {
  return (
    <div style={{
      margin:'10px',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      overflowWrap:'break-word',
      overflow:'auto',
      maxHeight:'600px',
      maxWidth:'800px',
      fontFamily: 'Roboto Mono, monospace'
    }}>
      <pre>{code}</pre>
    </div>
  );
};


export default CodeViewer;
