import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import CadastroVideo from "./pages/cadastro/Video";
import CadastroCategoria from './pages/cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={CadastroVideo} path="/cadastro/video" />
      <Route component={CadastroCategoria} path="/cadastro/categoria" />
      <Route component={() => <div>404 not found</div>} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
