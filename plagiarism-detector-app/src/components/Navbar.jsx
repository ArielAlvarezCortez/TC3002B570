import React from 'react';

const Navbar = () => {
  return (
    <>
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
    </>
  )
}

export default Navbar;