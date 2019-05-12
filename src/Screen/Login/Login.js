import React, { Component } from 'react';
import './Login.css';
import Button from '@material-ui/core/Button';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { green, red, black } from '@material-ui/core/colors';
import { browserHistory } from 'react-router';

const theme = createMuiTheme({
  palette: {
    primary: red,
  },
  typography: { useNextVariants: true },
});

const data = [
  {
    name: 'Truong Anh Quoc',
    age: 20
  },
  {
    name: 'Vu Thu Huong',
    age: 21
  },
  {
    name: 'Bui Phuong Ha',
    age: 21
  },
  {
    name: 'Nguyen Mai Chi',
    age: 21
  },
  {
    name: 'Dau Nguyen Yen Nhi',
    age: 20
  },
  {
    name: 'Dao Trung Kien',
    age: 21
  }
]

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    }
  }  

  handleClick = () => {
    browserHistory.push({
      pathname: '/Home',
      state: {
        data: data
      }
    });
  }

  render() {
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

          <Button
            variant="contained"
            style={{ margin: 16 }}
            onClick={this.handleClick}
          >
            LOGIN
          </Button>
        </div>
      </div>

    );
  }
}

