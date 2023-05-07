// import do módulo
import { useAppSelector } from "../../app/hooks"

// tipagem do state
interface State {
    color: {
        color: boolean
    }
}

// export do state selecionado
export const color = useAppSelector((state: State) => state.color.color)

