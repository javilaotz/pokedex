import React from 'react'
import {Card, Button, CardTitle, CardText, Col, Badge} from 'reactstrap'

const PokemonComponent = ({data}) => {
    const id            = data && data.id,
          name          = data && data.name,
          nametag       = name && name.english,
          pokemonType   = data && data.type 

    const getType = (PokeTypes) => {
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

    return (
      <Col sm="2" md="4" key={id}>
        <Card body>
          <CardTitle>{nametag}</CardTitle>
          <CardText>{getType(pokemonType)}</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    )
}

export default PokemonComponent