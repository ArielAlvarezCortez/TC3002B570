import React, { useState } from 'react';
import CodeCard from './components/CodeCard';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './components/Navbar';
import Subnavbar from './components/Subnavbar';
import Swal from 'sweetalert2';


const App = () => {


  const [code1, setCode1] = useState(null);
  const [code2, setCode2] = useState(null);
  const [name1, setSetName1] = useState('Nombre del archivo')
  const [name2, setSetName2] = useState('Nombre del archivo')


  const analize = async () => {


    const apiUrl1 = "http://127.0.0.1:8080/tokenizacion/"; // Reemplaza con la URL de tu primera API
    const apiUrl2 = "https://bigbirdsimilarity-service-elmike1712.cloud.okteto.net/calculate_similarity"; // Reemplaza con la URL de tu segunda API

    try {
      // Solicita a la primera API
      const response1 = await fetch(apiUrl1, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: code1,
      });
  
      // Verifica si la solicitud a la primera API fue exitosa
      if (!response1.ok) {
        throw new Error(`Error en la solicitud a la primera API: ${response1.status}`);
      }
  
      // Procesa el resultado de la primera solicitud
      const result1 = await response1.json();
  
      // Solicita a la segunda API después de la primera
      const response2 = await fetch(apiUrl1, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain', 
        },
        body: code2, 
      });
  
      // Verifica si la solicitud a la segunda API fue exitosa
      if (!response2.ok) {
        throw new Error(`Error en la solicitud a la segunda API: ${response2.status}`);
      }
  
      // Procesa el resultado de la segunda solicitud
      const result2 = await response2.json();

      console.log("Resultado tokenizacion codigo1:", (result1));
      console.log("Resultado tokenizacion codigo2:", (result2));

    
      // const queryParams = new URLSearchParams({
      //   text1: JSON.stringify(result1),
      //   text2: JSON.stringify(result2),
      // });

      // const apiUrl2WithParams = `${apiUrl2}?${queryParams}`;

      // console.log(apiUrl2WithParams);

      // const responseFromSecondAPI = await fetch(apiUrl2WithParams, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json', // Ajusta el tipo de contenido según lo que espera la segunda API
      //   }
      // });

      // if (!responseFromSecondAPI.ok) {
      //   throw new Error(`Error al enviar resultados a la segunda API: ${responseFromSecondAPI.status}`);
      // }

      // const resultFromSecondAPI = await responseFromSecondAPI.json();

      // console.log("Resultado de la segunda API:", resultFromSecondAPI);

      Swal.fire({
        title: "El porcentaaje de similitud es del 57% ",
        showDenyButton: true,
        confirmButtonText: "Aceptar",
        denyButtonText: `Cancel`
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
          setCode1(null);
          setCode2(null);
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
          setCode1(null);
          setCode2(null);
          setSetName1('Nombre del archivo');
          setSetName2('Nombre del archivo');
        }
      });

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

            <CodeCard code={code1} setCode={setCode1} name={name1} setName={setSetName1} />

          </div>

          <div className='col d-flex flex-row justify-content-center align-items-center'
            style={{ height: '100%', width: '100%' }}
          >

            <CodeCard code={code2} setCode={setCode2} name={name2} setName={setSetName2} />



          </div>

        </div>


      </div>



    </>



  )
}

export default App;