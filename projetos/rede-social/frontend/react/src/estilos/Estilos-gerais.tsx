// estilos gerais

// import do módulo
import styled from 'styled-components'

// declaração dos componentes
const Input = styled.input`
    background-color: transparent;
    font-size: 1em;
    border: none;
    border-bottom: 3px solid #41A7BD;
    color: white;
    padding: 3px 10px;
    outline: none;
    border-radius: 2px;
    margin: 5px;
    transition: .3s;
    &:focus {
        border-bottom: 3px solid transparent;
    }
`

const Invalido = styled.span`
    color: rgb(214, 24, 24);
    font-size: 0.8em;
    font-weight: bold;
`

const TextArea = styled.textarea`
    width: calc(100% - 22px);
    background-color: transparent;
    border: 1px solid #71747c;
    border-radius: 5px;
    padding: 3px 10px;
    resize: none;
    color: white;
    font-size: 1.1em;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: lighter;
    height: 70px;
    margin-top: 3px;
    &:focus{
        outline: 2px solid #41a6bddc;
        border: 1px solid #3a95aadc;
    }
    @media (max-width: 500px){
        font-size: 0.9em
    }
`

const InputTittle = styled.input`
    background-color: transparent;
    border: 1px solid #71747c;
    border-radius: 5px;
    font-size: 1.1em;
    padding: 3px 10px;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: lighter;
    width: 50%;
    &:focus{
        outline: 2px solid #41a6bddc;
        border: 1px solid #3a95aadc;
    }
    @media (max-width: 500px){
        font-size: 0.9em
    }
`

//exportação dos componentes
export { Input, Invalido, TextArea, InputTittle }