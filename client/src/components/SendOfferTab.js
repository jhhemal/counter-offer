import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

import SignatureCanvas from 'react-signature-canvas'


const SendOfferTab = () => {
  const [offer, setOffer] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [displayAlert, setDisplayAlert] = useState(false)

  const onClick = () => {
    // submit offer API

    // if success
    setDisplayAlert(true)
    setSubmitted(true)
  }

  return (
    <div>
      <Form>
            <Form.Group>
              <Container>
              <Row>
                <Col  md="auto" style={{padding: "0px 10px"}}><h3>$</h3></Col>
                <Col>
                { submitted ? 
                  <Form.Control type="offer" placeholder="Offer amount" value={offer} disabled/>
                :
                  <Form.Control type="offer" placeholder="Offer amount" value={offer} onChange={e => setOffer(e.target.value)}/>
                }
                </Col>
              </Row>

              </Container>

            </Form.Group>

            <br/>
            <Card style={{ justifyContent: "left", backgroundColor: "#f5f5f5", border: "2px solid black"}}>
              <SignatureCanvas penColor='black'
              canvasProps={{width: "700px", height: "120px", className: 'sigCanvas'}} style={{borderStyle: "solid"}}/>
            </Card>
            <i>Please sign in the above box to confirm.</i>

<br/>
            <br/>

            <div class="d-flex flex-row-reverse">
            <Button variant="primary" onClick={onClick}>
              Submit offer
            </Button>
            </div>
            <br/>

            {
              displayAlert ? 
              <Alert variant="success" dismissible onClose={() => setDisplayAlert(false)}>Offer sent successfully!</Alert>
              : 
              <></>
            }

      </Form>

    </div>



  )
}

export default SendOfferTab
