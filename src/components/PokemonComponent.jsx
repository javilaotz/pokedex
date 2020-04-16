import React from 'react'
import {Card, Button, CardTitle, CardText, Col, Badge} from 'reactstrap'

const PokemonComponent = ({data, modal, setModal, setPokemonDetail}) => {
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
                            
                            case 'Water':
                                tipoColor = 'primary'
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

    const handleModal = () => {
        setPokemonDetail({
            id   : id,
            name : nametag,
            type : getType(pokemonType)
          })
        setModal(!modal)
    }

    const imageURL = `https://img.pokemondb.net/sprites/home/normal/${nametag.toLowerCase()}.png`

    //const imageURL = `https://play.pokemonshowdown.com/sprites/xyani/${nametag.toLowerCase()}.gif`
    //[![Bulbasaur](https://img.pokemondb.net/sprites/home/normal/bulbasaur.png
    
    return (
      <Col sm="4" md="4" lg="2" key={id}>
        <Card body>
          <CardTitle>{nametag}</CardTitle>
          <img width="120" src={imageURL} alt={nametag}/>
          <CardText>{getType(pokemonType)}</CardText>
          <Button onClick={()=>handleModal()}>Go somewhere</Button>
        </Card>
      </Col>
    )
}

export default PokemonComponent