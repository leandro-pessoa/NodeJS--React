// imports dos módulos
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// import da imagem de fundo
import Img from '../componentes/img/background-img.jpg'

// import do ícone
import { IoMdSend } from 'react-icons/io'

// tipagem dos props
interface Props {
    
}

// declaração dos estilos
const Main = styled.main`
    display: flex;
    flex-direction: row;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    background-color: #2b2d33;
    height: 92vh;
    width: 75%;
    margin: auto;
    color: white;
    @media (max-width: 700px){
        font-size: 0.9em;
        width: 100%;
    }
    @media (max-width: 500px){
        height: calc(90vh - 19px);
    }
`
const SectionImg = styled.section`
    background: url(${Img}) center center no-repeat fixed;
    background-size: cover;
`
const SectionContent = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

const DivPost = styled.div`

`
const DivEnviar = styled.div`
    margin: 20px;
    border: 1px solid #71747c;
    border-radius: 10px;
    padding: 10px 16px;
    width: 80%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    @media (min-width: 800px){
        width: 65%;
    }
`
const Div = styled.div`
    
`

const ButtonSend = styled.button`  
    background-color: transparent;
    border: none;
`

const StyledIoMdSend = styled(IoMdSend)`
    &:hover{
        cursor: pointer;
        transform: translate(0px, 4px);
        transition: ease transform .3s;
    }
    &:active{
        transform: translate(0px, 5px);
        transition: ease transform .2s;
    }
    @media (max-width: 550px){
        width: 20px;
    }
`

const Logue = styled.div`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.1em;
    padding: 40px;
    border-top: 1px solid #71747c;
    width: calc(80% - 40px);
    text-align: center;
    @media (max-width: 600px){
        font-size: 1em;
    }
`

// exportação dos estilos
export { Main, SectionImg, SectionContent, DivPost, DivEnviar ,Div, ButtonSend, StyledIoMdSend, Logue }
