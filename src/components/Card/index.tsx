import React from 'react';

import html5 from '../../assets/img/icons/html-5.svg';
import './styles.css';

function Card() {
    return (
        <div className="card">
            <div className="topo">
                <div className="header-line"></div>
                <div className="logo-tec">
                    <img src={html5}/>
                </div>
                <div className="title-card">HTML 5</div>
            </div>
            <div className="content"></div>
            <div className="footer">
                <div className="botao-seguir">
                    <button className="seguir">
                        <i></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card;