import React from 'react';
import Registro from '../Pages/registro';
import Catalogo from '../Pages/catalogo';

export default function Section(){
  return(
    <section>

    <ul>
       <li><a href=<Registro />>Registrarse</a></li>
       <li><a href=<Catalogo />> ir a catalogo</a></li>
    </ul>

    </section>
  );
}
