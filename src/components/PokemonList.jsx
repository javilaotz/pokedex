import React from 'react';
import {ListGroup, ListGroupItem, Badge} from 'reactstrap';

const PokemonList = (props) => {
    
    const getType = (PokeTypes) => {
        //const tipos = [{tipo : 'grass', color : 'success'}]
        const badges = 
                <span className="info">
                    {PokeTypes.map( tipo =>  {
                        let tipoColor = ''
                        switch(tipo){
                            case 'Grass':
                                tipoColor = 'success'
                                break;

                            case 'Fire':
                                tipoColor = 'danger'
                                break;

                            case 'Poison':
                                tipoColor = 'secondary'
                                break;

                            default:
                                tipoColor = 'light'
                            break;
                        }
                        return <Badge color={tipoColor}>{tipo}</Badge>
                        })}
                </span>

        return badges
    }

    const list = 
    <ListGroup>
    {
      props.data.map(pokemon => {
        return <ListGroupItem key={pokemon.id}>
                      <span className="info">{pokemon.name.english}</span>
                      {getType(pokemon.type)}
              </ListGroupItem>
      })
    }
    </ListGroup>

  return list
}

export default PokemonList;