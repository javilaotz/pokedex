import React, {useState, useEffect} from 'react';
import NavbarComp from "./components/NavbarComp";
import PokemonList from './components/PokemonList'

//import firebase from './firebase'
import {fetchData} from './firebaseHandler'

import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([])

  const params = {
    collection : 'pokemons',
    orderBy : 'id',
    limit : 10,
    setter : setPokemons
  }

  useEffect(() => {
    fetchData(params)   
  }, [params])

  return (
    <div>
      <NavbarComp />
      <PokemonList data={pokemons}/>        
    </div>
  );
}

export default App;
