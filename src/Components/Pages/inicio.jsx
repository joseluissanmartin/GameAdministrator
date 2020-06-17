import React from 'react';
import Article from '../Components/article';
import Header from '../Components/header';
import Section from '../Components/section';
import Login from '../Components/login';

export default function Inicio(){
  return(
      <div className="App">
      <Header />
      <Login />
      <Section />
      <Article />
      </div>
);
}
