// import do módulo
import styled from "styled-components"

// declaração dos componentes estilizados 

const Button = styled.button`
    position: relative;
    background-color: transparent;
    border: none;
    width: 5%;
    &:hover{
        cursor: pointer;
    }
    color: #f85d5d;
`

// exportação dos componentes
export { Button }