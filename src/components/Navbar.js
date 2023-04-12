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
    <div className='shadow'>
        <div className='bg-black' style={{ display:'flex', justifyContent:'space-around', padding:'1rem'}}>
            <div style={{float:'left'}}>
                <p className="text-warning fs-3 myfont">Robert Sergio</p>
            </div>
            <div style={{float:'right'}}>
                <div className='btn btn-light mx-1'>
                    <a href='https://github.com/robert-sergio' class="bi nav-btn bi-github"></a>
                </div>
                <div className='btn btn-primary mx-1'>
                    <a href='https://www.linkedin.com/in/robert-sergio/' class="bi nav-btn bi-linkedin"></a>
                </div>
                <div className='btn btn-danger  mx-1'>
                    <a href='https://www.youtube.com/channel/UCtyEBMIbJheltY10Qyqf4DQ' class="bi nav-btn bi-youtube"></a>
                </div>
            </div>
        </div>
        <div className='bg-secondary' style={{padding:'0.2rem', display:'flex', justifyContent:'center'}}>
            {/* Tocar por GraphQL */}
            <a className='text-warning' style={{margin:'1rem', textDecoration:'None'}} href="/">Home</a>
            <a className='text-warning' style={{margin:'1rem', textDecoration:'None'}} href="/projetos/">Meus projetos</a>
            <a className='text-warning' style={{margin:'1rem', textDecoration:'None'}} href="/about/">Sobre</a>
        </div>
    </div>
  );
}