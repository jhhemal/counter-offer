import React, { useState, useEffect } from 'react';
import Video from 'twilio-video';
import Participant from './Participant';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'

const Room = ({ roomName, token, handleLogout }) => {
  const [room, setRoom] = useState(null);
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const participantConnected = participant => {
      setParticipants(prevParticipants => [...prevParticipants, participant]);
    };

    const participantDisconnected = participant => {
      setParticipants(prevParticipants =>
        prevParticipants.filter(p => p !== participant)
      );
    };

    Video.connect(token, {
      name: roomName
    }).then(room => {
      setRoom(room);
      room.on('participantConnected', participantConnected);
      room.on('participantDisconnected', participantDisconnected);
      room.participants.forEach(participantConnected);
    });

    return () => {
      setRoom(currentRoom => {
        if (currentRoom && currentRoom.localParticipant.state === 'connected') {
          currentRoom.localParticipant.tracks.forEach(function(trackPublication) {
            trackPublication.track.stop();
          });
          currentRoom.disconnect();
          return null;
        } else {
          return currentRoom;
        }
      });
    };
  }, [roomName, token]);

  const remoteParticipants = participants.length > 0 ? 
    participants.map(participant => (
    <Participant key={participant.sid} participant={participant} /> ))[participants.map(participant => (
      <Participant key={participant.sid} participant={participant} /> )).length - 1]
  :
  <></>


  return (
    <div className="room">
      <br/>
      <Alert><b>Game Code</b>: {roomName}</Alert>
      <Container>
        <Row>
          <Col>
            <div className="local-participant">
              {room ? (
                <>
                      <br/>
                <h3>Me</h3>
                <Participant
                  key={room.localParticipant.sid}
                  participant={room.localParticipant}
                />
                </>
              ) : (
                ''
              )}
            </div>
          </Col>
          <Col>
            <br/>
            <h3>Counterpart</h3>
            <div className="remote-participants">{remoteParticipants}</div>
          </Col>
        </Row>
      </Container>

      <br/>
      <Button variant="danger" onClick={handleLogout}>Exit video call</Button>

      {/* <h3>Remote Participants</h3> */}
    </div>
  );
};

export default Room;