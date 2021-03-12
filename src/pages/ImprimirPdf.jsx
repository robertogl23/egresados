import React, { useEffect } from 'react'
import GridEstadisticas1 from '../components/dashboardGrid/GridEstadisticas1';
import LOGO_TESI from '../img/LOGO_TESI.png';
import logodelestado from '../img/logodelestado.jpg';
import styled from 'styled-components';
const ImprimirPdfStyled = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
 .logo1 {

    height: 100px;
    width: 200px;
}
 .logo2 {

     height: 100px;
    width: 200px;
}
img {
    height: auto;
    width:100%;
}
button{
    height: 30px;
    width: 30px;
}
.boton {
    display: block;
}
.flex {
    display: flex;
    flex-direction: row;
}
`;
const ImprimirPdf = () => {

    useEffect(() => {

        console.log(window.document.querySelector('header').style.display = "none");
        console.log(window.document.getElementById('section-egresados').style.display = "none");
        window.document.querySelector('section').style.padding = '0'
    }, [])

    const ImprimirPdf = () => {
        window.document.querySelector('button').style.display = "none"
        window.print()
    }
    return (
        <div className="centrado flex">
            < ImprimirPdfStyled  >
                <div className='logo1'>
                    <img src={LOGO_TESI} />
                </div>
                <div className='logo2'>
                    <img src={logodelestado} />
                </div>
            </ ImprimirPdfStyled >
            
            <div className='boton'>
            <button onClick={ImprimirPdf}>pdf</button>
            </div>
        </div>
    )
}

export default ImprimirPdf
