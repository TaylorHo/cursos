import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Estudar from './pages/Estudar';
import SerAluno from './pages/SerAluno';

function Routes() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route path="/" exact component={Landing} />
      <Route path="/estudar" component={Estudar} />
      <Route path="/ser-aluno" component={SerAluno} />
    </BrowserRouter>
  );
}

export default Routes;