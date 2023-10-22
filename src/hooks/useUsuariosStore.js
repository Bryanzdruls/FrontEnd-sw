import {useDispatch, useSelector} from 'react-redux'
import {  nodeApi } from '../api';
import { onListar } from '../store/usuarios/usuarioSlice';

export const useUsuarioStore = () =>{

    const dispatch = useDispatch();
    const listarUsuarios = async()=>{
        let usuarios;
        try {
            const {data} = await nodeApi.get("/usuarios");
            dispatch(onListar(data.usuarios))
        } catch (error) {
            console.log(error);
        }
        return usuarios;
    }
    return{
        useDispatch,
        useSelector,

        listarUsuarios,
    }
}