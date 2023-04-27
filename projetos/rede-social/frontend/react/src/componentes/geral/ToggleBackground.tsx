// import do módulo
import React from 'react'

// import dos componentes estilizados
import { MaterialUISwitch } from '../../estilos/ToggleBackground-style'

// tipagem dos props
interface Props {

}

export default class ToggleBackground extends React.Component<Props>{
    // tipagem dos states

    // declaração do construtor e dos props
    constructor(props: Props){
        super(props)
        this.state = {

        }
    }
    render(): React.ReactNode {
        return (
            <>
                <MaterialUISwitch

                />
            </>
        )
    }
}