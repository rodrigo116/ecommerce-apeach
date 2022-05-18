import './navbar.css';
import {  AppBar,  Stack, Toolbar,Typography, Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { navBarOptions } from '../helpers/strings.js'
function appBarLabel() {

return (
    <Toolbar>
    <img className='fotoLogo' src="./logo-apeach.jpg" alt="logo"/>
    <Typography className='menuHeader' variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
    <ul className='list-item'>
    
    {navBarOptions.map(navBarOptions => {
        <li>
            <a href='home'><Button>{navBarOptions}</Button></a>
        </li>
    })} 
    </ul>
    </Typography>
    <h2>Apeach Bar</h2>
    </Toolbar>
    );
}

const darkTheme = createTheme({
palette: {
    mode: 'dark',
    primary: {
    main: '#1976d2',
    },
},
});

export default function NavBar() {
return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
    <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary">
            {appBarLabel('default')}
        </AppBar>
    </ThemeProvider>
    </Stack>
);
}
{/* <li>
<Button style={{color: "white"}} variant="text">Home</Button>
</li>
<li>
<Button style={{color: "white"}} variant="text">Menú</Button>
</li>
<li>
<Button style={{color: "white"}} variant="text">Contacto</Button>
</li>
<li>
<Button style={{color: "white"}} variant="text">Nosotros</Button>
</li>
<button></button> */}