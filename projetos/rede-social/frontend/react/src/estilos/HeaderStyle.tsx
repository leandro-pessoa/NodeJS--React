// imports dos módulos
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// import do ícone
import { CiMenuBurger } from 'react-icons/ci'

// tipagem dos props
interface Props {
    divMenu: string
}

// declaração dos estilos
const Heade = styled.header`
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #71747c;
    background-color: #2b2d33;
    padding: 15px 30px;
    @media (max-width: 700px){
        font-size: 0.9em;
    }
    @media (max-width: 500px){
        flex-direction: column;
        padding: 0px;
    }
`

const SectionTittle = styled.section`
    @media (max-width: 500px){
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: calc(100% - 20px);
        height: 45px;
        padding-left: 20px;
    }
`
const DivLinks = styled.div`
    @media (max-width: 500px){
        display: flex;
        justify-content: flex-end;
        align-items: center;
        background-color: #f1f1f1;
        width: calc(100% - 10px);
        height: 25px;
        padding: 5px;
    }
`

const SectionUser = styled.button`
    background-color: transparent;
    border: none;
    &:hover{
        cursor: pointer;
        
    }
    @media (max-width: 500px){
        display: flex;
        justify-content: flex-start;
        width: 100%;
        padding: 10px; 
        padding-left: 30px;
        border-top: 1px solid #71747c;
        gap: 15px;
    }
`
const DivUser = styled.div`

`
const DivMenu = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    background-color: #2b2d33;
    border: 1px solid #71747c;
    border-top: none;
    color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    display: ${(props: Props) => props.divMenu};
    font-size: 1em;
    transform: translate(-12px, 0px);
    z-index: 10;
    @media (max-width: 500px){
        transform: translate(0px, 20px);
    }
`

const H2 = styled.h2`
    color: #41A7BD;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #80C3B2;
    margin: 5px;
    padding: 5px 10px;
    border-radius: 20px;
    &:hover{
        background-color: #454852;
    }
    &:active{
        background-color: #454852;
    }
`
const StyledLink2 = styled(Link)`
    text-decoration: none;
    color: white;
`

const Div = styled.div`
    width: 100px;
    padding: 10px;
    display: flex;
    align-items: center;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    &:hover{
        background-color: #454852;
    }
`

// const Button = styled.button`
//     background-color: transparent;
//     border: none;
//     margin-right: 15px;
//     width: 25px;
//     text-align: center;
//     display: none;
//     &:hover{
//         background-color: #454852;
//         cursor: pointer;
//         border-radius: 5px;
//     }
//     @media (max-width: 700px){
//         display: block;
//     }
// `

// const StyledCiMenuBurger = styled(CiMenuBurger)`
//     margin-right: 15px; 
//     transform: translate(0px, 0px);
//     display: none;
//     @media (max-width: 700px){
//         display: block;
//     }
// `

// exportação dos estilos
export { Heade, SectionTittle, DivLinks, SectionUser, DivUser, DivMenu, H2, StyledLink, StyledLink2, Div }