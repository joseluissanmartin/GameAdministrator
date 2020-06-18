import React from 'react';
import Header from '../Components/header';
import Login from '../Components/login';
import Section from '../Components/section';
import ArticleCatalogo from '../Components/articleCatalogo';
import Condicional from '../Components/condicional';

export default function Catalogo(){
  return(
    <>
    <Header />
    <Login />
    <Section />
    <ArticleCatalogo />
    <Condicional />
    </>
);
}
