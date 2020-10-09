import React from "react"
import ReactDom from "react-dom"
import { Button, Container, Col } from "react-bootstrap";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
import icon from "./hero-mobile-tshirt-dark.png"

const App = () =>{
    return(
        <>
            <Container style={{height:"100%",display:"flex",alignItems:"center"}}>
                <Col className="text-center">
                    <br></br>
                    <img src={icon} alt="Hacktoberfest Logo" />
                    <h1><i>Hacktoberfest Hackers</i></h1>
                    <p>Name</p> 
                    { /* Copy paste this below and replace "Name" with your own name */ }
                </Col>
            </Container>
        </>
    )
}

ReactDom.render(<App/>,document.getElementById("root"))