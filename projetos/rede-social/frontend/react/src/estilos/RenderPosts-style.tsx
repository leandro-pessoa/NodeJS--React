// import do módulo
import styled from "styled-components"

// imports dos ícones
import { CiTrash } from 'react-icons/ci' 
import { CiEdit } from 'react-icons/ci'
import { MdOutlineCancel } from 'react-icons/md'

// declaração dos componentes estilizados
const DivPosts = styled.div`
    overflow: auto;
    width: 90%;
    @media (min-width: 800px){
        width: 70%;
    }
`

const Post = styled.div`
    margin: 20px;
    border: 1px solid #71747c;
    border-radius: 10px;
    padding: 10px 16px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    @media (max-width: 450px){
        font-size: 0.8em;
        padding: 10px 7px;
    }
`

const Div = styled.div`
    display: flex;
    word-break: break-all;
`

const H2 = styled.h2`
    font-size: 1.1em;
    color: #41A7BD;
`

const Small = styled.small`
    margin-top: 2px;
    color: #71747C;
    margin-left: 4px;
`

const P = styled.p`
    display: flex;
    word-break: break-all;
`

const H3 = styled.h3`
    font-size: 1em;
    margin-bottom: 5px;
    word-break: break-all;
`

const Button = styled.button`
    background-color: transparent;
    border: none;
`

const icons = `
    border-radius: 4px;
    &:hover{
        cursor: pointer;
        transition: ease .2s;
        background-color: #565963;
    }
    @media (max-width: 450px){
        width: 18px;
    }
`

const StyledCiTrash = styled(CiTrash)`
    ${icons}
    @media (max-width: 450px){
        margin-left: 4px;
    }
`

const StyledCiEdit = styled(CiEdit)`
    ${icons}
`

const StyledMdOutlineCancel = styled(MdOutlineCancel)`
    ${icons}
    margin-left: 10px;
    margin-bottom:  5px;
`

const Svg = styled.svg`
    ${icons}
    margin-right: 8px;
    padding-bottom: 0px;
`

const Path = styled.path`
    transform: translate(0px, -100px);
`

export { DivPosts, Post, Div, H2, Small, P, Button, H3 ,StyledCiTrash, StyledCiEdit, StyledMdOutlineCancel, Svg, Path }

