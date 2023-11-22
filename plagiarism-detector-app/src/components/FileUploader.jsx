import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import MySVGIcon from '../assets/Upload-rafiki.svg'

const FileUploader = ({ onFileUpload }) => {
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    onFileUpload(file);
  }, [onFileUpload]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

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
      <input {...getInputProps()} />

      <p className='fs-5s' style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        color:'#392759'
      }} >

        <img src={MySVGIcon} alt="Online illustrations by Storyset" style={{
          width:'40%'
        }} />
        Arrastra y suelta un archivo .c aquí, o haz clic para seleccionarlo.
      </p>

    </div>
  );
};

export default FileUploader;
