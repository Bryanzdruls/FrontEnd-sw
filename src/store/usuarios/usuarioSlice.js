import { createSlice } from '@reduxjs/toolkit';
export const usuarioSlice = createSlice({
    name: 'usuarios',
    initialState: {
        usuarios: [],
        
    },
    reducers: {
        onListar: (state, {payload}) => {
            state.usuarios = payload;
        },

    }
});
export const { onListar, } = usuarioSlice.actions;