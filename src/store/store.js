import { configureStore } from "@reduxjs/toolkit";
import { authSlice, usuarioSlice} from "./";


export const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        usuarios: usuarioSlice.reducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
        serializableCheck: false,
        
    })
})