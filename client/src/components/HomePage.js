import Card from "react-bootstrap/Card";
import { useState } from "react";
import NavBar from "react-bootstrap/NavBar";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

var userData = require("../db.json")


const HomePage = (props) => {
  // const [games, setGames] = useState([
  //   { gameName: "1", amount: "$50" },
  //   { gameName: "2", amount: "$25" },
  //   { gameName: "3", amount: "-$10" },
  // ]);

  return (
    <div style={{margin:"auto", width:"50%", padding:"10%"}}>
      { props.un ?
          <Card style={{margin:"auto", padding:"10%"}}>
            <h2>Your current balance is:</h2>
            <Alert variant="success"><h1>${userData[props.un]}</h1></Alert>
          </Card>
        :
        <h3>Log in to see your dashboard.</h3>
      }

    </div>

    
  )

};

export default HomePage;
