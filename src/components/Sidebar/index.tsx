import React from 'react';

import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import LayersOutlinedIcon from '@material-ui/icons/LayersOutlined';
import OfflineBoltOutlinedIcon from '@material-ui/icons/OfflineBoltOutlined';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import LaunchOutlinedIcon from '@material-ui/icons/LaunchOutlined';

import './styles.css';

function Sidebar() {
  return (
      <nav className="main-menu">
        <ul>
          <li>
            <Link to="/">
              <i><HomeOutlinedIcon fontSize="large" /></i>
              <span className="nav-text">
                Voltar
              </span>
            </Link>
          </li>
          <li className="has-subnav">
            <Link to="#">
              <i><LayersOutlinedIcon fontSize="large" /></i>
              <span className="nav-text">
                Módulos
              </span>
            </Link>
          </li>
          <li className="has-subnav">
            <Link to="/desafios">
              <i><OfflineBoltOutlinedIcon fontSize="large" /></i>
              <span className="nav-text">
                Desafios
              </span>
            </Link>
          </li>
          <li className="has-subnav">
            <a href="https://api.whatsapp.com/send?phone=5551989582215&text=Ol%C3%A1%2C%20gostaria%20de%20sugerir%20uma%20melhoria%20para%20sua%20plataforma%20de%20cursos%20%F0%9F%A4%A9">
              <i><RateReviewOutlinedIcon fontSize="large" /></i>
              <span className="nav-text">
                Sugerir Melhorias
              </span>
            </a>
          </li>
        </ul>

        <ul className="logout">
          <li>
             <Link to="ser-aluno">
                <i><LaunchOutlinedIcon fontSize="large" /></i>
                <span className="nav-text">
                  Tornar-se Aluno
                </span>
              </Link>
          </li>  
        </ul>
      </nav>
  )
}

export default Sidebar;