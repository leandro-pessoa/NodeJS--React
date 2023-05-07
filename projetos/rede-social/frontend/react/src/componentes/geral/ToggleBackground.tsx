// imports dos módulos
import { useState } from 'react'
import { useAppDispatch } from '../../app/hooks'

// import da action criada
import { changeColor } from '../../features/reducers'

// import dos componentes estilizados
import { MaterialUISwitch } from '../../estilos/ToggleBackground-style'

export default function ToggleBackground() {
    const dispatch = useAppDispatch()
    return (
        <>
            <MaterialUISwitch
                onChange={()=>dispatch(changeColor())}
            />
        </>
    )
}


