import React from 'react';

const CodeViewer = ({ code }) => {
  return (
    <div style={{
      margin:'10px',
      padding: '10px',
      border: '1px solid',
      borderRadius: '4px',
      overflowWrap:'break-word',
      overflow:'auto',
      maxHeight:'550px',
      width:'100%',
      maxWidth:'850px',
      fontFamily: 'Roboto Mono, monospace',
    }}>
      <pre>{code}</pre>
    </div>
  );
};


export default CodeViewer;
