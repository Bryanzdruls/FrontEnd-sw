import React from 'react'
import CrearUsuario from './CrearUsuario'
import NavBar from './navbar/Navbar'
import { AdminLayout } from './layout/AdminLayout'
const Inicio = () => {
  return (
    <AdminLayout>
      <NavBar/>
      <CrearUsuario/>
    </AdminLayout>
  )
}

export default Inicio
