import React from 'react';
import Juego from './Images/juego.png';

export default function Article() {
  return(
    <article>
        <h2>Los mas buscados de la semana:</h2>
        <img class="imagen1" src= {Juego} alt="A Juego"/>
        <img class="imagen2" src= {Juego} alt="B Juego"/>
        <img class="imagen3" src= {Juego} alt="C Juego"/>
        <button class="Buscar">Buscar</button>
        <button class="Ayuda">Pedir ayuda</button>
    </article>
  );
}
