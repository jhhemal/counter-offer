import { useNavigate } from 'react-router-dom'
// import Header from 'react-bootstrap/Header'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'


const LandingPage = () => {
    const navigate = useNavigate()
    return (
    <div>
        <Nav style = {{color:"#212121", align:"left"}}>
            <img src="../logo.png"></img>
        </Nav>
        <div align="center">
        <Button onClick = {() => {navigate("/login")}}>Log In</Button>
        <Button onClick = {() => {navigate("/signup")}}>Sign Up</Button>
        </div>
    </div>
    )
}

export default LandingPage