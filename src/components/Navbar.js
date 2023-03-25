import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

export default function MeuNavbar({ direction, ...args }) {
  const [collapsed, setCollapsed] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const toggle2 = () => setDropdownOpen2((prevState) => !prevState);

  return (
    <div>
        <Navbar color="faded" light className=' bg-secondary px-5'>
            <NavbarBrand href="/" className="text-light fs-4 myfont">
                Robert Sergio
            </NavbarBrand>
            <Nav navbar-expand className='position-relative'>
                <NavItem >
                    <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
                        <DropdownToggle caret>Aulas</DropdownToggle>
                        <DropdownMenu {...args}>
                        <DropdownItem>Python</DropdownItem>
                        <DropdownItem>SQL</DropdownItem>
                        <DropdownItem>Django</DropdownItem>
                        <DropdownItem>Selenium</DropdownItem>
                        <DropdownItem>Arduino</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavItem>
                <NavItem >
                    <Dropdown isOpen={dropdownOpen2} toggle={toggle2} direction={direction}>
                        <DropdownToggle caret>Projetos</DropdownToggle>
                        <DropdownMenu {...args}>
                        <DropdownItem>Incubadora de Feijões</DropdownItem>
                        <DropdownItem>Central meteorologica</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavItem>
                <NavItem>
                    <NavLink className='text-light' href="/components/">Sobre</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className='text-light' href="/components/">Contatos</NavLink>
                </NavItem>
                <NavItem>
                    <i class="bi bi-github"></i>
                </NavItem>
                <NavItem>
                    <i class="bi bi-github"></i>
                </NavItem>
                <NavItem>
                    <i class="bi bi-github"></i>
                </NavItem>
            </Nav>
        </Navbar>
    </div>
  );
}