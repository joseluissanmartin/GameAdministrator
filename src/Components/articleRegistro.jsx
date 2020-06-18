import React from 'react';


export default function ArticleRegistro(){
  return(
    <article class="formulario">
      <div class ="marco">
      <h6 class="nombreUsuario">Nombre de usuario</h6>
      <div class="nombreRegistro">
      <input type="nombreRegistro" name="nombreRegistro"/>
      </div>
      <h6 class="passUsuario">Contrase&ntilde;a</h6>
      <div>
      <input class="passReg" type="password" name="passRegistro"/>
      </div>
      <h6 class="passUsuario2"> Repite Contrase&ntilde;a</h6>
      <div>
      <input class="passReg2" type="password" name="passRegistro"/>
      </div>
      <h6 class="emailUsuario">Email</h6>
      <div >
      <input class="emailReg"type="email" name="emailReg"/>
      <h6 class="edadlUsuario">Fecha nacimiento</h6>
      <input class="edadUs"type="date" name="edadUs"/>
      <button class="cPerfil">Crear Perfil</button>
      <button class="cancelar">Cancelar</button>
      </div>
      </div>
    </ article>
  );
}
