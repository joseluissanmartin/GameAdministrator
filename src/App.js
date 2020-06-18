import React from 'react';
import './App.css';
<<<<<<< HEAD
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
=======
import Article from './Components/article';
import Header from './Components/header';
import Section from './Components/section';
import Inicio from './Pages/inicio';
import Catalogo from './Pages/catalogo';
import Registro from './Pages/registro';

function App(){
    return(
      <Inicio />
>>>>>>> c9e2678dbc36b1c04d8708c8dafab8d65c7a38ed
    );
  }
export default App;
