// import do módulo
import { useState } from 'react'

// import dos componentes estilizados
import { MaterialUISwitch } from '../../estilos/ToggleBackground-style'

import background from '../../estilos/Colors'

export default function ToggleBackground() {
    const [modo, setModo] = useState<boolean>(false)
    background()
    return (
        <>
            <MaterialUISwitch
                onChange={()=>setModo(!modo)}
            />
        </>
    )
}


