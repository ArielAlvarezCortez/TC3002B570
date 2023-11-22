import React from 'react'

const Subnavbar = ({analize}) => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row'>
          {/* Mitad izquierda */}
          <div className='col-md-6 d-flex align-items-center justify-content-start'
            style={{
              height: '10vh',
              padding: '0px 15px'
            }}
          >
            <div style={{
              fontSize: '1rem'
            }}>
              {/* Contenido que irá en la mitad izquierda (instrucciones, texto, etc.) */}
              <p>Detector de plagio diseñado para comparar y analizar dos archivos escritos en el lenguaje de programación C.</p>
            </div>
          </div>

          {/* Mitad derecha */}
          <div className='col-md-6 d-flex align-items-center justify-content-end'
            style={{
              height: '10vh',
              padding: '0px 15px'
            }}
          >
            <div style={{
              height: '100%',
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',

            }}>
              {/* Botón de análisis que irá en la mitad derecha */}
              <button
                className='btn btn-success'
                style={{
                  height: '8vh',
                  width: '25vw',
                  fontSize: '1.3rem',
                  borderRadius: '10px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                }}
                onClick={analize}
              >
                <i className="bi bi-file-diff" style={{ marginRight: '8px', fontSize: '1.5rem' }} /> Analizar

              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Subnavbar;