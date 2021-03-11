import React, { useContext } from 'react'
import styled from 'styled-components'
import { Box } from '../../components/grid/Box'
import { Grid } from '../../components/grid/Grid'
import Card from '../../components/shared/Card'
import List from '../../components/shared/List'
import ListFilter from '../../components/shared/ListFilter'
import Loading from '../../components/shared/Loading'
import Select1 from '../../components/shared/Select1'
import { AppContext } from '../../hooks/useContextApp'
import useFetch from '../../hooks/useFetch'
const EgresadosMain2Styled = styled.div`
height: auto;
width: 100%;
.grid{
    height: 780px;
    padding: 1em;
}
`;
const EgresadosMain2 = () => {
    const {
        preguntasFilter,
     
        selectUser,
        correoEgresados,
    } = useContext(AppContext);
    const { data, loading } = useFetch("http://localhost:4000/egresados/egresados-main")
    function getHttp(correo) {
        console.log(correoEgresados[0]);
        fetch(`http://localhost:4000/enviodecorreos/send-email/${correo}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    }
    return (
        <EgresadosMain2Styled >
            {loading ? (
                'Cargando'
            ) : (
                <div className='grid'>
                    <Grid columns={6} rows={6}>
                        <Box
                            startCol={1}
                            endCol={3}
                            startRow={1}
                            endRow={3}
                        >
                            <Card></Card>
                        </Box>
                        <Box
                            startCol={3}
                            endCol={5}
                            startRow={1}
                            endRow={3}
                        >
                            <Card></Card>
                        </Box>
                        <Box
                            startCol={5}
                            endCol={7}
                            startRow={1}
                            endRow={3}
                        >
                            <Card></Card>
                        </Box>
                        <Box
                            startCol={1}
                            endCol={3}
                            startRow={3}
                            endRow={7}
                        >

                            <Card>
                                <div className='contenedor'>
                                    <div className='textcent'>
                                        <div className='fijo'>
                                            <h4>Nombres de Egresados</h4>
                                        </div>
                                        <div className='contenedor-card-2'>
                                            <ListFilter data={data.nombres} />
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Box>
                        <Box
                            startCol={3}
                            endCol={7}
                            startRow={3}
                            endRow={5}
                        >
                            <Card>
                                <div className='contenedor'>
                                    <div className='textcent'>
                                        <div className='fijo'>
                                            <h4>Perfil Egresado</h4>
                                        </div>
                                        <div className='contenedor-card-3'>
                                            {selectUser ? (

                                                <div className='content-egresados'>
                                                    <button onClick={() => getHttp(correoEgresados[0])}>Enviar Correo
														</button>
                                                    <p >Correo:<span>{correoEgresados}</span></p>
                                                    <p >Nombre Completo:{ }</p>
                                                    <p >Telefono:{ }</p>
                                                    <p >Carrera:{ }</p>
                                                    <p >Matricula:{ }</p>

                                                </div>

                                            ) : (
                                                <span>
                                                    No ha seleccionado nombre de
                                                    egresado
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Box>
                        <Box
                            startCol={3}
                            endCol={7}
                            startRow={5}
                            endRow={7}
                        >
                            <Card>
                                <div className='contenedor'>
                                    <div className='textcent'>
                                        <div className='fijo'>
                                            <Select1 options={data.preguntas} />
                                        </div>
                                        <div className='contenedor-card-3'>
                                            {selectUser ? (
                                                loading ? (
                                                    <Loading typeSpinner='TailSpin' />
                                                ) : (
                                                    <List data={preguntasFilter} />
                                                )
                                            ) : (
                                                <span>
                                                    No ha seleccionado nombre de
                                                    egresado
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Box>
                    </Grid>
                </div>
            )}
        </EgresadosMain2Styled>
    )
}

export default EgresadosMain2
