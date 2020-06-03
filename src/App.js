import React from 'react';
import './App.css';
import Article from './Components/article';
import Header from './Components/header';
import Section from './Components/section';
import Footer from './Components/footer';
import Head from './Components/head';

function App(){
    return(
      <div className="App">
      <Head />
      <Header />
      <Section />
      <Article />
      <Footer />
      </div>
    );
  }
export default App;
