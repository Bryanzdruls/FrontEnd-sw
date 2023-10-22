import { Box, Toolbar } from "@mui/material"
import { NavBar } from "../navbar/Navbar";


export const Layout = ({ children }) => {
  
  
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
