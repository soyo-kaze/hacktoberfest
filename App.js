import React from "react"
import ReactDom from "react-dom"
import { Button, Container, Col } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import icon from "https://cdn.discordapp.com/attachments/747736205176733767/764042780867428362/posters1.png"

const App = () =>{
    return(
        <>
            <Container style={{height:"500px",display:"flex",alignItems:"center"}}>
                <Col className="text-center">
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