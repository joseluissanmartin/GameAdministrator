import React from 'react';
import './App.css';
import Article from './Components/article';
import Header from './Components/header';
import Section from './Components/section';

function App(){
    return(
      <div className="App">
      <Header />
      <Section />
      <Article />
      </div>
    );
  }
export default App;
