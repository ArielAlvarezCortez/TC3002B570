import React from 'react'
import CodeCard from './components/CodeCard';

const App = () => {

  return (
    <>
      {/* navbar */}
      <nav className="navbar bg-primary" style={{
        height: '8vh'
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

      {/* main Container */}
      <div className='d-flex flex-row justify-content-center' style={{
        height: '92vh',
        width: '100vw',
      }}>
        <div className='row align-items-stretch' style={{
          height: '100%',
          width: '100%'
        }}>

          <div className='col d-flex flex-row justify-content-center align-items-center' style={{ height: '100%', width: '100%', }}>

            <CodeCard />

          </div>

          <div className='col d-flex flex-row justify-content-center align-items-center' style={{ height: '100%', width: '100%' }}>

            <CodeCard />

          </div>

        </div>

      </div>

    </>



  )
}

export default App;