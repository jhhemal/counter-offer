import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

const CaseCard = (props) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [modalOpen, setModalOpen] = useState(false)

  // onClick takes in the num of the role, sends API req to join game, and redirects to game page
  const onClick = (role) => () => {
    // Send API request for joining
    const success = true
    if (success) {
      // redirect
      console.log(window.location.href)
      navigate(`/case/${props.id}/${role}`)
    }
  }

  return (
    <>
    <Card style={{padding: "10px 10px", }} onClick={() => setModalOpen(true)}>
      <Card.Body style={{display:"flex", justifyContent: "space-between"}}>
        <div>
          <h3>{props.name}</h3>
          <p>{props.summary}</p>
        </div>

        <div>
          <br/>
          <h4 style={{padding: "0px 10px"}}>{props.money}</h4>
        </div>
        
      </Card.Body>

    </Card>

    <Modal show={modalOpen} onHide={() => setModalOpen(false)} size="lg" centered>
      <div style={{padding: "10px"}}>
        <Modal.Header closeButton><Modal.Title><h3>{props.name}</h3></Modal.Title></Modal.Header>
        <Modal.Body>
        <Container>
            <Row>

              <Col>
                <h4>{props.role1}</h4>
                <img width="100%" src={props.img1}></img>
                <p style={{padding:"7px 0px"}}>{props.sum1}</p>
                <Button onClick={onClick(1)}>Play as {props.role1}</Button>
              </Col>

              <Col>
                <h4>{props.role2}</h4>
                <img width="100%" src={props.img2}></img>
                <p style={{padding:"7px 0px"}}>{props.sum2}</p>
                <Button onClick={onClick(2)}>Play as {props.role2}</Button>
              </Col>

            </Row>
          </Container>
        </Modal.Body>
      </div>
    </Modal>
    
    </>
    

  )



}

export default CaseCard