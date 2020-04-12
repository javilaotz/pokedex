import React from 'react';
import PokemonComponent from './PokemonComponent'
import {Row} from 'reactstrap'

const PokemonList = (props) => {    

    const list = 
    <Row>
        {
        props.data.map(pokemon => pokemon && <PokemonComponent data={pokemon}/>)
        }        
    </Row>

  return list
}

export default PokemonList;