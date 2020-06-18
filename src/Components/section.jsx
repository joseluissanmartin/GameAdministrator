import React from 'react';



export default function Section(){
  return(
    <section>

    <li><a
     onClick={() => {
     window.location.href = "/";
     }}
     >
     inicio
     </a></li>

    <li><a
     onClick={() => {
     window.location.href = "/registro";
     }}
     >
     Registrarse
     </a></li>

     <li><a
     onClick={() => {
     window.location.href = "/catalogo";
     }}
     >
     Catalogo
     </a></li>


    </section>


  );
}
