import React from 'react'
import { useSelector } from 'react-redux';
import { Button, TextField } from '@mui/material';
import { useUsuarioStore } from '../../hooks/useUsuariosStore';
import { useState } from 'react';
import { UsuarioCard } from './UsuarioCard';



const ListarUsuarios = () => {
    const [habilitar, sethabilitar] = useState(false)
    const {listarUsuarios: listar} = useUsuarioStore();
    const {usuarios} = useSelector(state => state.usuarios);

    const getEmpleados=()=>{
        listar();
        sethabilitar(true);
    }
  return (
    <>
        <Button 
            variant="contained"
            onClick={getEmpleados}
            disabled={habilitar}
        >Listar Empleados</Button>
        <div className="UserCard">
            {
                usuarios.length !=0
                ? usuarios.map(usuario =>( 
                    <UsuarioCard
                        key={usuario.id}
                        {...usuario}
                    />                   
                ))
                : <h2>Por favor presione el boton de listar empleados.</h2>
            }
        </div>
    </>
  )
}
export default ListarUsuarios;