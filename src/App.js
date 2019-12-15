import React from 'react';
// Components
import Header from './components/Header';
import Title from './components/Title';
import Search from './components/Search';
import List from './components/List';
import Footer from './components/Footer';
// Styles
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Title />
      <Search />
      <List />
      <Footer />
    </div>
  );
};

export default App;
