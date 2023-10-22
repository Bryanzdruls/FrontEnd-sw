import {useDispatch, useSelector} from 'react-redux'
import {  nodeApi } from '../api';
import { clearErrorMessage, onChecking, onFailure, onLogin, onLogout, onSuccess } from '../store';
import ListarUsuarios from '../pages/usuario/ListarUsuarios';


export const useAuthStore = () => {
    const { status, user, errorMessage,} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    
    const tokenHandler = (data) => {
        localStorage.setItem('token',data.token);
        localStorage.setItem('token-init-date',new Date().getTime());  
        const {nombre, apellido, id, ...rest} = data.usuario;
        dispatch( onLogin( {name: `${nombre} ${apellido}`.toUpperCase(), uid: id, ...rest}) )
    }

    const startLogin = async({ email, password }) => {
        dispatch( onChecking() );
        try {
            const {data} = await nodeApi.post('/auth/login',{ email, password });            
            tokenHandler(data);

        } catch ({response}) {
            if (response) {
                dispatch( onLogout('credenciales incorrectas'))
            }else{
                dispatch( onLogout('No hay coneccion con el servidor'))
            }
            setTimeout(()=>{
                dispatch( clearErrorMessage() )
            }, 10)
        }
        
    }
    const crearUsuarioHandle = async({nombre, apellido,email,fecNac,password,CargoId,emailCred}) => {
        try {   
            await nodeApi.post('/usuarios/',{nombre, apellido,email,fecNac,password,CargoId,emailCred});
            dispatch(onSuccess('Usuario Creado Correctamente'))
        } catch ({response}) {
            console.log(response);
            dispatch( onFailure(response.data?.msg || 'Nombre requerido, Revisar Email, Contraseña de minimo 6 caracteres'))
            setTimeout(()=>{
                dispatch( clearErrorMessage() )
            }, 10)
        }
    }
    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');       
        if (!token) return dispatch( onLogout() );

        try {
            const {data} = await nodeApi.get('/auth/renovar');
            tokenHandler(data);

        } catch (error) {
            console.log('DIGANLE A BRIAN QUE CREE EL ENDPOINT');
            console.log('Se borro el token por error',error);
            localStorage.clear();
            dispatch( onLogout() );
        }
    }

    const startLogout = () => {
        localStorage.clear();
        dispatch( onLogout());
    }
    return {
        //propiedades
        errorMessage,
        status,
        user,
        //metodos
        startLogin,
        crearUsuarioHandle,
        checkAuthToken,
        startLogout
    }
}