import React, { useState } from 'react';
import FileUploader from './FileUploader';
import CodeViewer from './CodeViewer';

const CodeCard = ({ code, setCode, name, setName }) => {

  // Función para manejar la carga de archivos
  const handleFileUpload = (file) => {
    const reader = new FileReader();

    // Accede al nombre del archivo usando file.name
    reader.onload = () => {
      const fileName = file.name;
      const fileContent = reader.result;
      // Establece el código y el nombre del archivo en el estado
      setCode(fileContent);
      setName(fileName);
    };

    // Lee el contenido del archivo como texto
    reader.readAsText(file);
  };

  // Función para restablecer la carga de archivos
  const resetFileUpload = () => {
    // Restablece el código y el nombre del archivo a valores predeterminados
    setCode(null);
    setName('Nombre del archivo');
  };

  // Renderizar la interfaz del componente
  return (
    <>
      <div className="card" style={{
        height: '90%',
        width: '98%',
        borderStyle: '2px solid',
        borderColor: 'black'
      }}>

        <div className="card-header" style={{
          background: '#f77f00',
          borderColor: 'black',
          fontSize: '1.2rem'
        }}>
          {/* Nombre del archivo */}
          {name}
        </div>

        <div className="card-body d-flex flex-column justify-content-center align-items-center">

          {/* Botón para cambiar el archivo si ya está cargado */}
          {code && 
              <a onClick={resetFileUpload} className="btn btn-danger" 
                style={{ margin: '10px', width:'90%' }}
              >
                Cambiar
            </a>
          }

          {/* Mostrar el componente FileUploader si no hay código cargado */}
          {!code && <FileUploader onFileUpload={handleFileUpload} />}
          
          {/* Mostrar el visor de código si hay código cargado */}
          {code && <CodeViewer code={code} />}

        </div>
      </div>
    </>
  );
}

// Exportar el componente para su uso en otros archivos
export default CodeCard;
