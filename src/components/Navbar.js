import React from 'react'

export default function navbar() {
  return (
    <nav className="navbar navbar-expand-sm bg-secondary px-5">
        <div className="container-fluid  mt-2 mb-2">

            <a className="navbar-brand myfont text-light fs-2" href="#">Robert Sergio</a>

            <ul className="navbar-nav">
                <li className="nav-item">
                <a className="nav-link text-light" aria-current="page" href="#">Home</a>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Aulas
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Python</a></li>
                        <li><a className="dropdown-item" href="#">Github actions</a></li>
                        <li><a className="dropdown-item" href="#">VBA</a></li>
                    </ul>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Projetos
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Arduino</a></li>
                        <li><a className="dropdown-item" href="#">Aplicativos</a></li>
                        <li><a className="dropdown-item" href="#">Sites</a></li>
                    </ul>
                </li>

                <li className="nav-item">
                <a className="nav-link  text-light">Projetos Sociais</a>
                </li>

                <li className="nav-item">
                <a className="nav-link  text-light">Contato</a>
                </li>

            </ul>

            <ul className="navbar-nav px-5">
                <li className='btn btn-sm btn-danger'>
                    <i className="bi bi-youtube"></i>
                </li>
                <li className='btn btn-sm btn-secondary'>
                    <i className="bi bi-github"></i>
                </li>
                <li className='btn btn-sm btn-primary'>
                    <i className="bi bi-linkedin"></i>
                </li>
            </ul>   
        </div>
    </nav>
  )
}
