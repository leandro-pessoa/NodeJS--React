// imports dos módulos
import React from 'react'

// imports dos componentes estilizados
import { Button, H2, Div } from '../../estilos/RenderPosts-style'
import { TextArea } from '../../estilos/Estilos-gerais'
import { DivComentarios } from '../../estilos/Comentarios-style'

// tipagem dos props
interface Props {
    id?: string
    
}

export default class Comentarios extends React.Component<Props>{
    // tipagem dos states
    state: {
        comentario: boolean
    }

    //declaração do construtor e dos states
    constructor(props: Props){
        super(props)
        this.state = {
            comentario: false
        }
    }    

    // abertura e fechamento do modo de comentários
    setComentario(e: any): void | boolean{
        this.setState({comentario: !this.state.comentario})      
    }

    render(): React.ReactNode{
        return (
            <Div
                style={{flexDirection: 'column'}}
            >
                <Button>
                    <svg xmlns="http://www.w3.org/2000/svg" height="27" viewBox="0 96 960 960" width="27" data-indice={this.props.id} fill={this.state.comentario ? '#356A8C' : '#71747C'} onClick={(e)=>this.setComentario(e)}>
                        <path d="M266 630h266v-22H266v22Zm0-123h428v-22H266v22Zm0-123h428v-22H266v22ZM132 876V282q0-23 15.613-38.5Q163.225 228 186 228h588q23 0 38.5 15.5T828 282v428q0 23-15.5 38.5T774 764H244L132 876Zm22-54 80-80h540q14 0 23-9t9-23V282q0-14-9-23t-23-9H186q-14 0-23 9t-9 23v540Zm0-540v-32 572-540Z" data-indice={this.props.id}/>
                    </svg>
                </Button>
            </Div>
        )
    }
}