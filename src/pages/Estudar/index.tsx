import React from 'react';
import Sidebar from '../../components/Sidebar';
import Board from '../../components/Board';

// import { Link } from 'react-router-dom';

import './styles.css';

function Estudar() {
  return (
    <div id="all">
      <Sidebar />
      <Board />
    </div>
  )
}

export default Estudar;