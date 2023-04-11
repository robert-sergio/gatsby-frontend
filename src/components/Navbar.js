import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
  Container
} from 'reactstrap';
import '../styles/styles.css'


export default function MeuNavbar({ direction, ...args }) {
  return (
    <div className='shadow mb-2'>
        <div className='bg-black'>
            <Navbar color="faded" light className='px-5'>
                <NavbarBrand className='' href="/">
                    <p className="text-warning fs-3 myfont">Robert Sergio</p>
                </NavbarBrand>
                <Nav className=''>
                    <NavItem className='btn btn-light mx-1'>
                        <a href='https://github.com/robert-sergio' class="bi nav-btn bi-github"></a>
                    </NavItem>
                    <NavItem className='btn btn-primary mx-1'>
                        <a href='https://www.linkedin.com/in/robert-sergio/' class="bi nav-btn bi-linkedin"></a>
                    </NavItem>
                    <NavItem className='btn btn-danger  mx-1'>
                        <a href='https://www.youtube.com/channel/UCtyEBMIbJheltY10Qyqf4DQ' class="bi nav-btn bi-youtube"></a>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
        <div className='bg-secondary'>
            <Navbar>
                <Nav className='justify-content-center' style={{ flex: 1}}>
                    {/* Tocar por GraphQL */}
                    <NavItem>
                        <NavLink className='text-warning' href="/">Home</NavLink>
                    </NavItem>
                    {/* <NavItem>
                        <NavLink className='text-warning' href="/aulas/">Aprenda</NavLink>
                    </NavItem> */}
                    <NavItem>
                        <NavLink className='text-warning' href="/projetos/">Meus projetos</NavLink>
                    </NavItem>
                    {/* <NavItem>
                        <NavLink className='text-warning' href="/nerd/">Mundo Nerd</NavLink>
                    </NavItem> */}
                    <NavItem>
                        <NavLink className='text-warning' href="/about/">Sobre</NavLink>
                    </NavItem>
                    {/* <NavItem>
                        <NavLink className='text-warning' href="/contato/">Contato</NavLink>
                    </NavItem> */}
                </Nav>
            </Navbar>
        </div>

    </div>
  );
}