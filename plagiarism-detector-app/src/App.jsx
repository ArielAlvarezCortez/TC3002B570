import React from 'react'
import CodeCard from './components/CodeCard';
import 'bootstrap-icons/font/bootstrap-icons.css';


const App = () => {

  return (
    <>
      {/* navbar */}
      <nav className="navbar bg-primary" style={{
        height: '5vh',
        width: '100vw'
      }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{
            color: 'white',
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.5rem'
          }}>
            Plagiarism Detection - Team 1
          </a>
        </div>
      </nav >

      {/* <div className='d-flex flex-row justify-content-center' style={{
          height:'10vh',
          background:'red',
          width:'100%'
        }}>
          <div className=''>

          </div>
          <div className=''>

          </div>
        </div> */}

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
              <button className='btn btn-success'
                style={{
                  height: '8vh',
                  width: '25vw',
                  fontSize: '1.3rem',
                  borderRadius: '10px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                }}
              >
                <i className="bi bi-file-diff" style={{marginRight:'8px', fontSize:'1.5rem'}}/> Analizar
                
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* main Container */}
      <div className='d-flex flex-row justify-content-center' style={{
        height: '85vh'
      }}>
        <div className='row align-items-stretch' style={{
          height: '100%',
          width: '100vw'
        }}>

          <div className='col d-flex flex-row justify-content-center align-items-center'
            style={{ height: '100%', width: '100%', }}
          >

            <CodeCard />

          </div>

          <div className='col d-flex flex-row justify-content-center align-items-center'
            style={{ height: '100%', width: '100%' }}
          >

            <CodeCard />

          </div>

        </div>


      </div>



    </>



  )
}

export default App;