import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Alert from 'react-bootstrap/Alert'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import { getStaticContextFromError } from '@remix-run/router';
import { v4 as uuidv4 } from 'uuid'


const InstructionsTab = (props) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [code, setCode] = useState("")

  const generateRoom = () => {
    const id = uuidv4()
    console.log(id)
    // Send API request to join room
    props.setRoom(id)
    setModalOpen(false)
  }

  return (
    <div>
    <div>
      <h5>{`${props.c.name}: Instructions`}</h5>
      <br/>
      <p>
        {
          props.rid === "1" ? 
            props.c.insn1
          :
            props.c.insn2
        }
      </p>
      <br/>
      {
        props.room.length === 0 ? 
          <div>
            <Button onClick={() => setModalOpen(true)}>Play Game</Button>
          </div>
        :
          <div>
            <Alert>
              <h6>
              Game code: 
              </h6>
              <h5>
                {props.room} 
              </h5>
              <i>
              (share this with a friend!)
              </i>
            </Alert>
            
          </div>
      }
    </div>


    <Modal show={modalOpen} onHide={() => setModalOpen(false)} size="md" centered>
      <div style={{padding: "10px"}}>
        <Modal.Header closeButton><Modal.Title><h3>{props.c.name}</h3></Modal.Title></Modal.Header>
        <Modal.Body>
        <Container style={{width:"90%"}}>
            <Row style={{width:"90%"}}>
                <h4>Create new game</h4>
                <Button onClick={generateRoom}>Create game</Button>
            </Row>
            <br/>
            <hr/>
            <br/>

            <Row style={{width:"90%"}}>
              <h4>Join existing game</h4>
                <Form.Control type="code" placeholder="Game Code" value={code} onChange={e => setCode(e.target.value)}/>
              <Button style={{margin:"15px 5px"}} onClick={() => {props.setRoom(code)}}>Join game</Button>
            </Row>

          </Container>
        </Modal.Body>
      </div>
    </Modal>

    </div>
  )



}

export default InstructionsTab