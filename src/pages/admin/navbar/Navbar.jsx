import { useDispatch, useSelector } from "react-redux"
import { onLogout as onLogoutServidor } from "../../../store/auth"
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"





export const NavBar = () => {
    const dispatch = useDispatch()
    const {user}=useSelector(state => state.auth);
    
    const onLogout =()=>{
        dispatch( onLogoutServidor() );
    }


  return (
    <AppBar 
        position="fixed"
        sx={{
            width:{ sm: `calc(100% - ${ 0 }px)` }, 
            ml:{sm:`${ 0 }px`}
        }}
    >
        <Toolbar>
            
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Typography variant="h6" noWrap component='div'>{user.name}</Typography>
                <IconButton 
                    color="error"
                    onClick={onLogout}
                >
                    <LogoutOutlined/>
                </IconButton>
            </Grid>
        
        </Toolbar>

    </AppBar>
  )
}
export default NavBar;