import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { AppBar, Toolbar, IconButton, Typography, Button, Container } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { Navbar,NavItem, Icon } from 'react-materialize';
import HomeIcon from '@material-ui/icons/Home';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import DvrIcon from '@material-ui/icons/Dvr';
import ContactsIcon from '@material-ui/icons/Contacts';
export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext)
  return (
    <div className="body-navi">
      <AppBar position="static" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Film Cards
          </Typography>
          <Button color="inherit" onClick={toggle}>
            Switch Nav to {!dark ? 'Dark' : 'Light'} mode
          </Button>
          <div className='material-icon'>
            <ul >
        <li>
          <Link to='/'>
            <Icon>home</Icon> Home
          </Link>
        </li>
        <li>
          <Link to='/about'>
            <Icon>info_outline</Icon> About
          </Link>
        </li>
        <li>
          <Link to='/news'>
            <Icon>dvr</Icon> News
          </Link>
        </li>
        <li>
          <Link to='/contact'>
            <Icon>contacts</Icon> Contact
          </Link>
        </li>
      </ul></div>
        </Toolbar>
      </AppBar>

    </div>
    
      
  )
}
