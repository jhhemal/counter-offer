import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios'
import Room from './Room';
import Button from 'react-bootstrap/Button'

const VideoChat = (props) => {
  const [username, setUsername] = useState('');
  const [roomName, setRoomName] = useState(props.room);
  const [token, setToken] = useState(null);

  // useEffect(() => {


  // }, [props.room]);

  const handleSubmit = useCallback(
    async event => {
      event.preventDefault();
      // const data = await axios.post('http://10.150.243.219:3001/video/token', JSON.stringify({
        const data = await axios.post('http://localhost:3001/video/token', JSON.stringify({
          identity: 'props.room' + window.location.href.split("/")[window.location.href.split("/").length - 1],
          room: props.room
        }), {headers:{"Content-Type" : "application/json"}}).then(res => {
        console.log(res)
        return (
          res.data
        )
      });
      setToken(data.token);
    },
    [roomName, username]
  );

  const handleLogout = useCallback(event => {
    setToken(null);
  }, []);

  return (
    <>
        <Button onClick={handleSubmit}>Join Video Call</Button>
        <Room roomName={roomName} token={token} handleLogout={handleLogout} />
    </>
  )
};

export default VideoChat;