import React from 'react'
import { useForm } from '../hooks/useForm';

const FormCorreo = ({ correo }) => {

    const [formValues, handleInputChange] = useForm({});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        getHttp()
    }

    function getHttp() {
        
        fetch(
            `http://localhost:4000/enviodecorreos/send-email/${correo}/${formValues.asunto}/${formValues.des}`
        )
            .then((res) => res.json())
            .then((data) => {
                alert("Se envio el correo")
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Asunto</label>
            <br />
            <input
                type="text"
                name="asunto"

                onChange={handleInputChange}
            />
            <br />
            <label htmlFor="">Descripcion del correo</label>
            <br />
            <input
                type="text"
                style={{ width: 380, height: 80 }}
                name="des"
                onChange={handleInputChange}

            />
            <br />
            <button>Enviar Correo</button>
        </form>
    )
}

export default FormCorreo
