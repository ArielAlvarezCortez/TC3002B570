import React from 'react';

const Navbar = () => {
  return (
    <>
      {/* Barra de navegación con estilo de fondo y dimensiones específicas */}
      <nav className="navbar bg-primary" style={{
        height: '5vh',
        width: '100vw'
      }}>
        <div className="container-fluid">
          {/* Enlace de la marca con estilo específico */}
          <a className="navbar-brand" href="#" style={{
            color: 'white',
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.2rem'
          }}>
            Plagiarism Detection - Team 1
          </a>
        </div>
      </nav>
    </>
  );
}

// Exportar el componente para su uso en otros archivos
export default Navbar;
