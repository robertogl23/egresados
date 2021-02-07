import React from 'react'
import styled from 'styled-components'
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
    }

    h2{
        margin-top:20px;
    }
    .content{
        border:1px solid #00ff55;

    }
`;
const EgresadosMain = () => {
    return (
        <EgresadosMainStyled>
            <div className="egresados-main">
                <div>
                    <h2>Sistema Egresados</h2>
                </div>
                <div className="content">

                </div>
            </div>
        </EgresadosMainStyled>
    )
}

export default EgresadosMain
