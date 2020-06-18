import React from 'react';
import Carrito from './Images/carrito.png';

export default function ArticleCatalogo(){
  return(
    <article>
      <div class ="marco">
        <h7 class= "buscarCatalogo">Buscar</h7>
        <select id="juegoSeleccionado" class="seleccionarJuego">
          <option disable>Ver catalogo</option>
          <option value="gta">GTA V</option>
          <option value="cod">COD: Modern Warzone</option>
          <option value="borderlands">Borderlands 3</option>
        </select>
        <article class="articleChico">
          <div>
            <label class= "etiquetaNombre" ><h8>Nombre:</h8></label>
            <label class= "etiquetaPrecio" ><h9>Precio:</h9></label>
            <label class= "etiquetaComprar" ><h10>Comprar</h10></label>
          </div>
          <label class= "nombreGame"></label>
          <label class= "price"></label>
          <img class ="carrito" src={Carrito} alt="A Carrito"/>
        </article>
        </div>
        
    </article>
  );
}
