import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import MySVGIcon from '../assets/Upload-rafiki.svg';

const FileUploader = ({ onFileUpload }) => {
  
  // Función de devolución de llamada para manejar la carga de archivos
  const onDrop = useCallback((acceptedFiles) => {

    // Obtenemos el primer archivo aceptado
    const file = acceptedFiles[0];
    
    onFileUpload(file);

  }, [onFileUpload]);

  // Configuración de useDropzone para gestionar eventos de carga de archivos
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  // Renderizar la interfaz del componente
  return (
    <div {...getRootProps()} style={{
      border: '2px dashed #6874e8',
      borderRadius: '4px',
      width:'90%',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      height:'70%', 
      cursor:'pointer'
    }}>
      {/* Input invisible para la carga de archivos */}
      <input {...getInputProps()} />

      {/* Contenido del componente con mensaje e icono SVG */}
      <p className='fs-5s' style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        color:'#392759'
      }}>

        {/* Icono SVG para la carga de archivos */}
        <img src={MySVGIcon} alt="Online illustrations by Storyset" style={{
          width:'40%'
        }} />
        
        {/* Mensaje indicando la acción de arrastrar y soltar o hacer clic para seleccionar archivos */}
        Arrastra y suelta un archivo .c aquí, o haz clic para seleccionarlo.
      </p>
    </div>
  );
};

// Exportar el componente para su uso en otros archivos
export default FileUploader;
