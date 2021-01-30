import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const CardStyled = styled.div`
    height:100%;
    width:100%;
    background:#fff;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    overflow-y:${props => props.scroll_y};
    border-radius:4px;
`;
const Card = ({children,scroll_y}) => {
    return (
        <CardStyled scroll_y={scroll_y}>
            {children}
        </CardStyled>
    )
}
Card.protoTypes = {
    scroll_y: PropTypes.string,
}
Card.defaultProps = {
    scroll_y:"none"
}

export default Card
