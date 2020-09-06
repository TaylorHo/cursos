import React from 'react';
import { Link } from 'react-router-dom';

import landingImg from '../../assets/img/landing.svg';

import iconeVoltar from '../../assets/img/icons/back.svg';
import iconeAbrir from '../../assets/img/icons/abrir.svg';

import './styles.css';

function SerAluno() {

    return (
    <div id="page-landing">
        <div id="page-landing-content" className="container">
            <div className="logo-container">
                <h1>Benefícios</h1>
                <ul>
                  <li>Desafios</li>
                  <li>Exercícios exclusivos</li>
                  <li>Dicas de quem trabalha na área</li>
                  <li>Esclarecimento de dúvidas 24/7</li>
                  <li>Aulas online quando quiser</li>
                </ul>
            </div>
            <img src={landingImg} alt="Plataforma de estudos." className="hero-image"/>
            <div className="buttons-container">
                <Link to="/" className="voltar">
                    <img src={iconeVoltar} alt="Estudar"/>
                    Não, Obrigado
                </Link>

                <a href="https://api.whatsapp.com/send?phone=5551989582215&text=Ol%C3%A1%2C%20eu%20gostaria%20de%20ser%20um%20aluno%20de%20Desenvolvimento%20Web%20%F0%9F%9A%80" className="ser-aluno">
                    <img src={iconeAbrir} alt="Ser Aluno"/>
                    Quero Ser Aluno
                </a>
            </div>
        </div>
    </div>
    );
}

export default SerAluno;