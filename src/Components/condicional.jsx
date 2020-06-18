import React from 'react';


var seleccion =document.querySelector('select');
var nombreJuego= document.querySelector('label1');
var precio= document.querySelector('label2');


export default function Condicional(){
  return(

function mostrarInfo(){
  var opcion = seleccion.value;
  if (opcion==='gta'){
    nombreJuego.textContent ='GTA V'
    precio.textContent= '14.990'
  }
  else if(opcion === 'cod'){
    nombreJuego.textContent='COD Warzone'
    precio.textContent='12.990'
  }
  else if(opcion === 'borderlands'){
    nombreJuego.textContent='Borderlands 3'
    precio.content='14.990'
  }
}
);
}
