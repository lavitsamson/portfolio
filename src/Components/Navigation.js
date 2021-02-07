import React from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

export default function Navigation() {
    return (
        <Navbar className='border-bottom' bg='trnsparent' expand='lg'>
              <Navbar.Brand><div className="name-logo">LS</div>Lavit Samson</Navbar.Brand>
              <Navbar.Toggle
                className='border-0'
                aria-controls='navbar-toggle'
              />
              <Navbar.Collapse id='navbar-toggle'>
                <Nav className='ml-auto'>
                  <NavLink activeClassName="active-link" className='nav-link' to='/' exact>
                    Home
                  </NavLink>
                  <NavLink activeClassName="active-link" className='nav-link' to='/about'>
                    About
                  </NavLink>
                  <NavLink activeClassName="active-link" className='nav-link' to='/contact'>
                    Contact
                  </NavLink>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
    )
}
