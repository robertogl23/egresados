import React from 'react'
import styled from 'styled-components'
import { Box } from '../../components/grid/Box';
import { Grid } from '../../components/grid/Grid';
import Card from '../../components/shared/Card';
const EgresadosMainStyled = styled.div`
   // border:1px solid #8c00ff;
    height:100%;
    position:static;
    width:auto;
    overflow:hidden;
    .egresados-main{
        border:1px solid #8c00ff;
        display: flex;
        justify-content:center;
        flex-direction:column;
    }

    h2{
        margin-top:20px;
    }
    .content{
        margin-top:20px;
        display: flex;
        border:1px solid #00ff55;
        justify-content:center;
    }
    .title{
        text-align:center;
    }
    .grid{
        border:1px solid #0044ff;
        height:180px;
        width:80%;
    }
    .card-title{
        margin-top:10px;
        margin-left:10px;
    }
    .content-2{
        border:1px solid #0044ff;
    }
`;
const EgresadosMain = () => {
    return (
        <EgresadosMainStyled>
            <div className="egresados-main">

                <div className="title">
                    <h2>Sistema Egresados</h2>
                </div>
                <div className="content">
                    <div className="grid">
                        <Grid columns={3}>
                            <Box>
                                <Card>
                                    <div className="card-title">
                                        <h4>Respuestas Totales</h4>
                                        <samp>59</samp>
                                    </div>
                                </Card>
                            </Box>
                            <Box>
                                <Card>
                                <div className="card-title">
                                        <h4>Egresados Titulados Totales</h4> 
                                    </div>
                                </Card>
                            </Box>
                            <Box>
                                <Card>
                                <div className="card-title">
                                        <h4>Egresados con empleo</h4> 
                                    </div>
                                    
                                </Card>
                            </Box>

                        </Grid>
                    </div>
                    <div className="content-2">

                    </div>
                </div>
            </div>
        </EgresadosMainStyled>
    )
}

export default EgresadosMain
