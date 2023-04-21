// imports dos módulos
import React from 'react'

// imports dos componentes estilizados
import { Button, H2 } from '../../estilos/RenderPosts-style'
import { DivComentarios } from '../../estilos/Comentarios-style'
import { TextArea } from '../../estilos/Estilos-gerais'

// tipagem dos props
interface Props {
    id?: string
    comentario: boolean
}

export default class Comentarios extends React.Component<Props>{
    // tipagem dos states
    
    //declaração do construtor e dos states
    constructor(props: Props){
        super(props)
        
    }    

    render(): React.ReactNode{
        return (
            <>
                <DivComentarios
                    displayComentarios={this.props.comentario ? 'flex' : 'none'}
                >
                    <hr 
                        color='#71747C'
                        style={{margin: '10px'}}
                    />
                    <H2>Comentários</H2>
                    <TextArea
                        placeholder='Comentário'
                    />
                </DivComentarios>
            </>
        )
    }
}