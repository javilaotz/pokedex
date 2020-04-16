import React, {useState} from 'react';
import PokemonComponent from './PokemonComponent'
import {Row, Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, FormGroup, Label, Input} from 'reactstrap'

const PokemonList = (props) => {    
  const [modal, setModal] = useState(false);
  const [pokemonDetail, setPokemonDetail] = useState({
    id : '',
    name : '',
    type : ''
  })
  const className   = 'ClassName';

  const toggle = () => setModal(!modal);

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
              <img src={imageURL} alt={name}/>
            </Col>
            <Col sm="12" md="6" lg="6">
              <FormGroup>
                <Label for="exampleText">Insert comment here for {name}</Label>
                <Input type="textarea" name="text" id="exampleText" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md="6" lg="6">
              {type}
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>


  const list = 
      <Row>
          {
          props.data.map(pokemon => pokemon && <PokemonComponent data={pokemon} modal={modal} setModal={setModal} setPokemonDetail={setPokemonDetail}/>)
          }        
      </Row>
      

  return (<div>
            {list}
            {detailModal}
         </div>)
}

export default PokemonList;