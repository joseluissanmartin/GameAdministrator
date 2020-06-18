import React from 'react';
import './App.css';
import Inicio from './Pages/inicio';
import Catalogo from './Pages/catalogo';
import Registro from './Pages/registro';
import Notfund from './Pages/notfund';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


function App(){
    return(
      <Router>
      <Switch>
      <Route exact path= "/"><Inicio /></ Route>
      <Route path = "/registro"><Registro /></ Route>
      <Route path = "/catalogo"><Catalogo /></ Route>
      <Route path ="*"><Notfund /></ Route>
      < /Switch>
      </ Router>
    );
  }
export default App;
