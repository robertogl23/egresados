import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const BoxSyled = styled.div`
    //border:1px solid #00ff0d;
    display: flex;
    grid-column: ${props => props.startCol}/ ${props => props.endCol};
    grid-row: ${props => props.startRow}/ ${props => props.endRow};
    height:${props => props.height}${props => props.um};
    margin-top: ${props => props.mt}em;
    flex-direction:${props => props.fd};
`;
const Box = ({
    children,
    endCol,
    startCol,
    endRow,
    startRow,
    marginTop,
    height,
    flexDirecton,
    unidadMedida,
}) => (
    <BoxSyled 
        endCol={endCol}
        startCol={startCol}
        endRow={endRow}
        startRow= {startRow}
        mt={marginTop}
        height={height}
        fd={flexDirecton}
        um={unidadMedida}
    >
        {children}
    </BoxSyled>
)
Box.propTypes = {
    endCol: PropTypes.number,
    startCol: PropTypes.number,
    endRow: PropTypes.number,
    startRow: PropTypes.number,
    marginTop: PropTypes.number,
    height: PropTypes.number,
    flexDirecton: PropTypes.string,
    unidadMedida: PropTypes.string,
}
Box.defaultProps = {
    marginTop: 0,
    startRow: 0,
    endRow:0,
    height:100,
    flexDirecton:"row",
    unidadMedida:"%",
}
export  {Box}
