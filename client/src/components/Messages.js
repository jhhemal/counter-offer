import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';



const Messages = (props) => {
  const [offer, setOffer] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [displayAlert, setDisplayAlert] = useState(false)
  const [token, setToken] = useState("")

  const onClick = () => {
    // submit offer API

    // if success
    setDisplayAlert(true)
    setSubmitted(true)
  }

  const handleSubmit = useCallback(async event => {
    event.preventDefault();
    const data = await fetch('/video/token', {
      method: 'POST',
      body: JSON.stringify({
        identity: 'aarushi',
        room: props.room
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json());
    setToken(data.token);
  }, [props.room]);

  return (
    <Button onClick={handleSubmit}></Button>



  )
}

export default Messages




