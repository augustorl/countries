import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom';
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';
import { Container } from './styles';
import { Toolbar, Typography } from '@material-ui/core';

export default function Navbar() {
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
            <Brightness2OutlinedIcon/>
            <p>Dark Mode</p>
          </div>
          </Toolbar>
        </AppBar>
      </Container>
  )
}