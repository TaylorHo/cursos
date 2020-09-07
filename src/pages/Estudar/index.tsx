import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

function Estudar() {
  return (
    <div id="all">
      <nav className="main-menu">
        <ul>
          <li>
            <Link to="/">
              <i className="fa fa-arrow-left fa-2x"></i>
              <span className="nav-text">
                Voltar
              </span>
            </Link>
          </li>
          <li className="has-subnav">
            <Link to="#">
              <i className="fa fa-bars fa-2x"></i>
              <span className="nav-text">
                Módulos
              </span>
            </Link>
          </li>
          <li className="has-subnav">
            <Link to="/desafios">
              <i className="fa fa-bolt fa-2x"></i>
              <span className="nav-text">
                Desafios
              </span>
            </Link>
          </li>
          <li className="has-subnav">
            <a href="https://api.whatsapp.com/send?phone=5551989582215&text=Ol%C3%A1%2C%20gostaria%20de%20sugerir%20uma%20melhoria%20para%20sua%20plataforma%20de%20cursos%20%F0%9F%A4%A9">
              <i className="fa fa-comment fa-2x"></i>
              <span className="nav-text">
                Sugerir Melhorias
              </span>
            </a>
          </li>
        </ul>

        <ul className="logout">
          <li>
             <Link to="ser-aluno">
                <i className="fa fa-external-link fa-2x"></i>
                <span className="nav-text">
                  Tornar-se Aluno
                </span>
              </Link>
          </li>  
        </ul>
      </nav>
    </div>
  )
}

export default Estudar;