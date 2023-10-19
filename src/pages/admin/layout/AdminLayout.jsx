import { Box, Toolbar } from "@mui/material"
import { NavBar } from "../navbar/Navbar";
import { useState } from "react";




export const AdminLayout = ({ children }) => {
  
    const [openCrearUsuario, setOpenCrearUsuario] = useState(true);
  
  return (
    <Box sx={{display: 'flex'}} className="animate__animated animate__fadeIn animate__faster">
        <NavBar/>
        <Box
            component='main'
            sx={{ flexGrow: 1, p:3 }}
        >
            <Toolbar/>
            { children }

        </Box>
    </Box>
  )
}
