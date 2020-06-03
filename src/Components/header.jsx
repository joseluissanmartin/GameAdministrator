import React from 'react';


export default function Header(){
  return(
    <header>
      <div class = "tarjeta"
        />
        <h1>Game Administrator</h1>

      <div class= "registro">
     <form>
      <div class="email">
        <input type="email" name="email" placeholder=" Usuario o e-mail" />
      </div>
      <div>
        <input type="password" name="password" placeholder=" Contrase&ntilde;a" />
      </div>
      <p>
        <div class= "u">
    <input type="radio" name="ua" value="u" required /><h4>Usuario</h4>
        </div>
        <div class= "a">
    <input type="radio" name="ua" value="a" required /><h5>Administrador</h5>
        </div>
     </p>
        <button Class="Iniciar">Iniciar sesi&oacute;n</button>
        <button class="Registrarse">Registrarse</button>
      </form>
     </div>

     </header>
  );
}
