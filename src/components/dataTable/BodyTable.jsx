import React from 'react'
import styled from 'styled-components'
import { Grid } from '../grid/Grid'
const BodyTableStyled = styled.div`
   // border:1px solid blue;
    height:auto;
    width:auto;
    .grid{
       // border: 1px solid green;
        height:60px;
        width:fit-content;
    }
`
const BodyTable = () => {
    return (
        <BodyTableStyled>
            <div className="wrap">
                <div className="grid">
                    <Grid columns={6} colSize={"180px"} gap={0}>

                    </Grid>
                </div>
            </div>
        </BodyTableStyled>
    )
}

export default BodyTable
