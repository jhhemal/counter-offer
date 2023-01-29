import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Card from 'react-bootstrap/Card'
import InstructionsTab from './InstructionsTab'
import SendOfferTab from './SendOfferTab'
import ReceiveOfferTab from './ReceiveOfferTab'
import VideoChat from './VideoChat'


const cases = require('../cases.json')

const GamePage = (props) => {
  const { cid, rid } = useParams()
  const [c, setC] = useState({})
  const [selected, setSelected] = useState("0")
  const [room, setRoom] = useState("")

  useEffect(() => {
    // const url = window.location.href.split("/")
    // setCaseID(url[url.length - 2])
    // setGameID(url[url.length - 2])
    console.log(cid)
    console.log(rid)

    setC(cases.filter(x => x.id === cid)[0])
    console.log(c)

  }, []);


  return (
    <div style={{margin:"0 auto", width:"90%", padding:"5%", textAlign:"left"}}>
      <Card style={{minHeight:"30em"}}>
        <Card.Header>
        <Nav variant="tabs" defaultActiveKey="0" onSelect={(key) => setSelected(key)} size="large">
          <Nav.Item>
            <Nav.Link eventKey="0">Instructions</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="1" disabled={room.length === 0}>Messages</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link eventKey="2" disabled={room.length === 0}>Offer</Nav.Link>
          </Nav.Item>

        </Nav>
        </Card.Header>

        <div style={{margin: "30px"}}>
          { selected === "0" ?
              <InstructionsTab rid={rid} c={c} room={room} setRoom={setRoom}/>
            :
            <></>
          }

          { selected === "1" ?
            <VideoChat room={room}/>
            :
            <></>
          }

          { selected === "2" ?
            rid === "1" ? 
            <SendOfferTab />
            :
            <ReceiveOfferTab />
            :
            <></>
          }
        </div>

        
        </Card>

    </div>
  )



}

export default GamePage