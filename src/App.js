import React from 'react';
import NavbarComp from "./components/NavbarComp";
import PokemonList from './components/PokemonList'

import './App.css';

import data from './data'


function App() {
  return (
    <div>
      <NavbarComp />
      <PokemonList data={data}/>
      
      
    </div>
  );
}

export default App;
