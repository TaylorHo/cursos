import React from 'react';
import { Link } from 'react-router-dom';

import landingImg from '../../assets/img/landing.svg';

import iconeEstudar from '../../assets/img/icons/study.svg';
import iconeSerAluno from '../../assets/img/icons/give-classes.svg';

import './styles.css';

function Landing() {

    return (
    <div id="page-landing">
        <div id="page-landing-content" className="container">
            <div className="logo-container">
                <h1>Olá...</h1>
                <h2>...gostaria de estudar por conta ou se tornar aluno?</h2>
            </div>
            <img src={landingImg} alt="Plataforma de estudos." className="hero-image"/>
            <div className="buttons-container">
                <Link to="/estudar" className="study">
                    <img src={iconeEstudar} alt="Estudar"/>
                    Só Estudar
                </Link>

                <Link to="/ser-aluno" className="ser-aluno">
                    <img src={iconeSerAluno} alt="Ser Aluno"/>
                    Ser Aluno
                </Link>
            </div>
            <span className="regulamento">
                <a>Entenda como funciona*</a>
            </span>
        </div>
    </div>
    );
}

export default Landing;