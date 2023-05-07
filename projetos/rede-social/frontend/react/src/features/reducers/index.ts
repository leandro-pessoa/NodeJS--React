// imports do módulo
import { createSlice } from '@reduxjs/toolkit'

// tipagem do state
interface ColorState {
    color: boolean
}

// declaração do state
const initialState: ColorState = {
    color: false
}

// declaração e export do slice e declaração da action
export const ColorSlice = createSlice({
    name: 'color',
    initialState,
    reducers: {
        changeColor: (state) => {
            state.color = !state.color
        },
    }
})

// export da action
export const { changeColor } = ColorSlice.actions

// export do reducer
export const colorReducer = ColorSlice.reducer


