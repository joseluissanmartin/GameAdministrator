import React from 'react';
import Registro from '../Pages/registro';
import Catalogo from '../Pages/catalogo';


export default function Section(){
  return(
    <section>

<<<<<<< HEAD
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

=======
    <ul>
       <li><a href=<Registro />>Registrarse</a></li>
       <li><a href=<Catalogo />> ir a catalogo</a></li>
    </ul>
>>>>>>> c9e2678dbc36b1c04d8708c8dafab8d65c7a38ed

    </section>


  );
}
