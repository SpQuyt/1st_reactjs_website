import React from 'react';
import logo from '../logo.svg';
import './Login.css';
import Button from '@material-ui/core/Button';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { green, red, black } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: red,
  },
  typography: { useNextVariants: true },
});

const Login = () => {
  return (
    <div className="Screen">
      <div className="Login-box">
        <header className="Login-title">Đăng nhập</header>
        <div className='Login-input-group'>
          <MuiThemeProvider theme={theme}>
            <TextField
              margin='dense'
              className='Login-input'
              label="Username"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
            />
            <TextField
              margin='dense'
              className='Login-input'
              label="Password"
              variant="outlined"
              id="mui-theme-provider-outlined-input"
            />
          </MuiThemeProvider>
        </div>

        <Button variant="contained" style={{ margin: 16 }}>
          LOGIN
        </Button>
      </div>
    </div>

  );
}

export default Login;
