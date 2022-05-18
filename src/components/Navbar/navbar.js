import './navbar.css';
import CartWidget from '../CartWidget/CartWidget.js'
import {  AppBar,  Stack, Toolbar,Typography, Button } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function appBarLabel() {
return (
    <Toolbar>
    <img className='fotoLogo' src="./logo-apeach.jpg" alt="logo" />
    <Typography className='menuHeader' variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
    <ul>
        <li>
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
    </ul>
    </Typography>
    <h2 className='nombreBar'>Apeach Bar</h2>
    <div>
        <CartWidget/> 
    </div>
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