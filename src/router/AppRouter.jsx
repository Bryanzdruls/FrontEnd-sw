import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router";

import Inicio from "../pages/admin/Inicio";
import { Login } from "../auth/pages/Login";
import { useAuthStore } from "../hooks";


export const AppRouter = () => {
  const { status, checkAuthToken } = useAuthStore();
  //const authStatus = 'not-authenticated';//not-authenticated
  useEffect(() => {
    checkAuthToken();
    
  }, [])
  


  if (status === 'checking') {
    return <h3>Cargando...</h3>
  }

  return (
    <Routes>
      {
        (status ==='not-authenticated') 
        ? (
          <>
            <Route path="/auth/*" element={ <Login/> }/>
            <Route path="/*" element={ <Navigate to='/auth/login'/> }/>
          </>
        )
        : (
          <>
            <Route path="/" element={ <Inicio/> }/>
            <Route path="/*" element={ <Navigate to='/'/> }/>
          </>
        )
      }

    </Routes>
  )
}
