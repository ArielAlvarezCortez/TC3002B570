import React, { useState } from 'react';
import FileUploader from './FileUploader';
import CodeViewer from './CodeViewer';

const CodeCard = () => {

  const [code, setCode] = useState(null);
  const [name, setName] = useState(null);



  const handleFileUpload = (file) => {

    const reader = new FileReader();

    // Accede al nombre del archivo usando file.name

    reader.onload = () => {
      const fileName = file.name;
      const fileContent = reader.result;
      setCode(fileContent);
      setName(fileName);
    };

    reader.readAsText(file);
  };

  const resetFileUpload = () => {
    setCode(null);
    setName(null);
  }


  return (
    <>
      <div className="card" style={{
        height: '90%',
        width: '90%',
        borderStyle: '2px solid',
        borderColor: 'black'
      }}>

        <div className="card-header" style={{
          background: '#f77f00',
          borderColor: 'black',
          fontSize: '1.2rem'
        }}>
          {!name ? <>Nombre del archivo</> : name}
        </div>

        <div className="card-body d-flex flex-column justify-content-center">

          {code && <a onClick={resetFileUpload} className="btn btn-danger" style={{ margin: '10px' }}>Cambiar</a>}

          {!code && <FileUploader onFileUpload={handleFileUpload} />}
          {code && <CodeViewer code={code} />}

        </div>
      </div>
    </>
  )
}

export default CodeCard;