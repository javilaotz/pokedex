import React, {useState, useEffect} from 'react';
import NavbarComp from "./components/NavbarComp";
import PokemonList from './components/PokemonList'

import firebase from './firebase'

import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      const db = firebase.firestore()
      const data = await db.collection("pokemons").orderBy("id").limit(10).get()
      setPokemons(data.docs.map(doc => doc.data()))
    }

    fetchData()    
  }, [])

  return (
    <div>
      <NavbarComp />
      <PokemonList data={pokemons}/>  
      
    </div>
  );
}

export default App;
