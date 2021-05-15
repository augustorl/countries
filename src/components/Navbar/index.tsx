import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';
import { Container } from './styles';
import { Toolbar, Typography } from '@material-ui/core';
import { ThemeContext } from '../../context/ThemeProvider';

export default function Navbar() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
      <Container>
        <AppBar position="static">
          <Toolbar>
          <Link to="/">
            <Typography variant="h5" noWrap>
              Where in the world?
            </Typography>
          </Link>
          <div>
            <button onClick={toggleTheme}>
              <Brightness2OutlinedIcon/>
              <p>{theme.name === 'dark' ? 'Light Mode' : 'Dark Mode'}</p>
            </button>
          </div>
          </Toolbar>
        </AppBar>
      </Container>
  )
}