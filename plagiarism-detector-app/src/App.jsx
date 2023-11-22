import React, { useState } from 'react'
import CodeCard from './components/CodeCard';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './components/Navbar';
import Subnavbar from './components/Subnavbar';


const App = () => {

  const [code1, setCode1] = useState(null);
  const [code2, setCode2] = useState(null);

  const analize = async () => {

    console.log("Codigo1:", code1);
    console.log("Codigo2:", code2);

    const apiUrl1 = "http://127.0.0.1:8080/tokenizacion/"; // Reemplaza con la URL de tu primera API
    const apiUrl2 = "http://tu-segunda-api.com/endpoint"; // Reemplaza con la URL de tu segunda API

    try {
      // Crea dos promesas para las solicitudes individuales a la primera API
      const request1 = fetch(apiUrl1, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain', // Ajusta el tipo de contenido según lo que espera la primera API
        },
        body: code1,
      });

      const request2 = fetch(apiUrl1, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain', // Ajusta el tipo de contenido según lo que espera la primera API
        },
        body: code2,
      });

      // Usa Promise.all para ejecutar ambas solicitudes simultáneamente
      const [response1, response2] = await Promise.all([request1, request2]);

      // Verifica si ambas solicitudes a la primera API fueron exitosas
      if (!response1.ok || !response2.ok) {
        throw new Error(`Error en una o ambas solicitudes a la primera API: ${response1.status}, ${response2.status}`);
      }

      // Procesa los resultados de ambas solicitudes a la primera API
      const result1 = await response1.json();
      const result2 = await response2.json();

      console.log("Resultado de la primera API:", result1);
      console.log("Resultado de la primera API:", result2);

      // Aquí puedes almacenar los resultados donde lo necesites
      // Ejemplo: almacenar en variables globales, en un estado si estás usando React, etc.

      // Ahora, envía los resultados a la segunda API
      const responseFromSecondAPI = await fetch(apiUrl2, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Ajusta el tipo de contenido según lo que espera la segunda API
        },
        body: JSON.stringify({ result1, result2 }), // Envía los resultados como JSON al body de la solicitud
      });

      if (!responseFromSecondAPI.ok) {
        throw new Error(`Error al enviar resultados a la segunda API: ${responseFromSecondAPI.status}`);
      }

      const resultFromSecondAPI = await responseFromSecondAPI.json();

      console.log("Resultado de la segunda API:", resultFromSecondAPI);

      

    } catch (error) {
      console.error("Error al analizar el código:", error);
    }
  };






  return (
    <>
      {/* navbar */}
      <Navbar />

      {/* instruccions and button */}
      <Subnavbar analize={analize} />

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

            <CodeCard code={code1} setCode={setCode1} />

          </div>

          <div className='col d-flex flex-row justify-content-center align-items-center'
            style={{ height: '100%', width: '100%' }}
          >

            <CodeCard code={code2} setCode={setCode2} />


          </div>

        </div>


      </div>



    </>



  )
}

export default App;