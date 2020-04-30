import React, {useState, useEffect} from 'react';
import PokemonComponent from './PokemonComponent'
import {Row, Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, FormGroup, Label, Input} from 'reactstrap'

import {setData, fetchData} from '../firebaseHandler'

const PokemonList = (props) => {    
  const [modal, setModal] = useState(false),
        [userName, setUserName] = useState(''),
        [comment, setComment] = useState('')

  const [comments, setComments] = useState({})

  useEffect(()=> {
    const params = {
      collection : 'comments',
      orderBy : false,
      limit : 10,
      setter : setComments
    }
    fetchData(params)
  },[comments])

  const [pokemonDetail, setPokemonDetail] = useState({
    id : '',
    name : '',
    type : ''
  })
  const className   = 'ClassName';

  const toggle = () => setModal(!modal);

  const handleSave = () => {
    const params = {
      collection : 'comments',
      doc : '',
      data : {userName, comment},
      callback : toggle
    }
    setData(params)
  }

  const details = pokemonDetail && pokemonDetail,
        id        = details && details.id,
        name      = details && details.name,
        type      = details && details.type,
        imageURL  = `https://play.pokemonshowdown.com/sprites/xyani/${name.toLowerCase()}.gif`

  const detailModal = 
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>{name}</ModalHeader>
        <ModalBody>
          <Row>
            <Col sm="12" md="6" lg="6">
              <img src={imageURL} alt={name}/><br/>{type}
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="6" lg="6">
              <FormGroup>
                <Label for="exampleText">Your name</Label>
                <Input type="text" name="text" id="text" onChange={e => setUserName(e.target.value)}/>
              </FormGroup>

              <FormGroup>
                <Label for="exampleText">Insert comment here for {name}</Label>
                <Input type="textarea" name="text" id="exampleText" onChange={e=> setComment(e.target.value)}/>
              </FormGroup>
            </Col>
          </Row>  
          <Row>
            <Col sm="12" md="6" lg="6">
              Comments:

            </Col>
          </Row>        
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSave}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>


  const list = 
      <Row>
          {
          props.data.map(pokemon => pokemon && <PokemonComponent key={pokemon.id} data={pokemon} modal={modal} setModal={setModal} setPokemonDetail={setPokemonDetail}/>)
          }        
      </Row>
      

  return (<div>
            {list}
            {detailModal}
         </div>)
}

export default PokemonList;