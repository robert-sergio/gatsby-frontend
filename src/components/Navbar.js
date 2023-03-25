import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import '../styles/styles.css'


export default function MeuNavbar({ direction, ...args }) {
  return (
    <div>
        <Navbar color="faded" light className=' bg-secondary px-5'>
            <NavbarBrand href="/" className="text-light fs-4 myfont">
                Robert Sergio
            </NavbarBrand>
            <Nav navbar-expand className='position-relative'>
                <NavItem>
                    <NavLink className='text-light' href="/aulas/">Aulas</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='text-light' href="/projetos/">Projetos</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='text-light' href="/about/">Sobre</NavLink>
                </NavItem>
                <NavItem className='btn btn-light mx-1'>
                    <i class="bi bi-github"></i>
                </NavItem>
                <NavItem className='btn btn-primary mx-1'>
                    <i class="bi bi-linkedin"></i>
                </NavItem>
                <NavItem className='btn btn-danger  mx-1'>
                    <i class="bi bi-youtube"></i>
                </NavItem>
            </Nav>
        </Navbar>
    </div>
  );
}