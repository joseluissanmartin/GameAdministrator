import React from 'react';
import Titulo from './Images/titulo.png';
import Logo from './Images/logo.png';
export default function Footer(){
  return(
    <footer>
      <img class ="imagen0" src={Logo} alt="A Logo"/>
      <img class="imagenTitulo" src= {Titulo} alt="A Titulo" />
    </footer>
  );
}
