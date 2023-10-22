import React from 'react'
import CrearUsuario from './CrearUsuario'

import { Layout } from '../layout/Layout'

import ListarUsuarios from '../usuario/ListarUsuarios'
import { useSelector } from 'react-redux'

const Inicio = () => {
  const {user} =useSelector(state => state.auth);
  
  return (
    <Layout>
      {
        user.CargoId === 1 
        ? <CrearUsuario/> 
        : <ListarUsuarios/>
      }
    </Layout>
  )
}

export default Inicio
