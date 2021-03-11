import React, { useEffect } from 'react'
import GridEstadisticas1 from '../components/dashboardGrid/GridEstadisticas1';

const ImprimirPdf = () => {

    useEffect(() => {
    
      console.log(window.document.querySelector('header').style.display = "none");
      console.log(window.document.getElementById('section-egresados').style.display = "none");
      window.document.querySelector('section').style.padding = '0'
    },[])

    const ImprimirPdf = () => {
        window.document.querySelector('button').style.display = "none"
        window.print()
    }
    return (
        <div className="centrado">
            <h1>Hola</h1>
          
            <button onClick={ImprimirPdf}>pdf</button>
        </div>
    )
}

export default ImprimirPdf
