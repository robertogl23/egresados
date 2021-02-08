import React from 'react'
import { Box } from '../../components/grid/Box'
import { Grid } from '../../components/grid/Grid'
import Card from '../../components/shared/Card'
import List from '../../components/shared/List'
import Loading from '../../components/shared/Loading'
import useSWR from "swr";

const fetcher = (...args) =>
    fetch(...args).then((res) => res.json());
const PerfilEgresados = () => {
    const { data, error } = useSWR(
        "http://localhost:4000/egresados/perfilegresados",
        fetcher
    );
    if (error) return <div>failed to load</div>;
    if (!data) return <Loading typeSpinner={"Grid"} />;
    return (
        <div className='centrado'>
            <div className='estilos-grid'>
                <Grid columns={1} rows={4} medidaRows={'300px'}>
                    <Box>
                        <Card>
                        <div className="contenedor">
                            <div className='textcent'>
                                <div className="fijo">
                                    <h2>
                                        Nombre
                                    </h2>
                                </div>
                                <div className='contenedor-card'>

                                    <div className='border'>
                                        <List data={data.data}/>
                                    </div>

                                </div>
                            </div>
                            </div>
                        </Card>
                    </Box>
                    <Box>
                        <Card>
                        <div className="contenedor">
                            <div className='textcent'>
                                <div className="fijo">
                                    <h2>
                                        Telefono
                                </h2>
                                </div>
                                <div className='contenedor-card'>

                                    <List data={data.data2}/>
                                </div>
                            </div>
                            </div>
                        </Card>
                    </Box>
                    <Box>
                        <Card>
                        <div className="contenedor">
                            <div className='textcent'>
                                <div className="fijo">
                                    <h2>
                                        Correos de Egresados
                                </h2>
                                </div>
                                <div className='contenedor-card'>


                                    <List data={data.data3}/>
                                </div>
                            </div>
                            </div>
                        </Card>
                    </Box>
                    <Box>
                        <Card>
                            <div className="contenedor">
                                <div className='textcent'>
                                    <div className="fijo">
                                        <h2>
                                            Matricula
                      </h2>
                                    </div>
                                    <div className='contenedor-card'>

                                        <List data={data.data4}/>
                                    </div>
                                </div>
                            </div>

                        </Card>
                    </Box>
                </Grid>
            </div>
        </div>



    )
}

export default PerfilEgresados
