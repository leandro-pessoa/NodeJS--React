// import do módulo
import styled from 'styled-components'

// tipagem dos props
interface Props {
    displayComentarios: string
}

// declarações dos componentes estilizados
const DivComentarios = styled.div`
    display: ${(props: Props) => props.displayComentarios};
    flex-direction: column;
`


// export dos componentes estilizados
export { DivComentarios }
