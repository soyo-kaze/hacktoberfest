import React from "react"
import ReactDom from "react-dom"
import { Button, Container, Col } from "react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const App = () =>{
    return(
        <>
            <Container style={{height:"500px",display:"flex",alignItems:"center"}}>
                <Col className="text-center">
                    <img src={"https://raw.githubusercontent.com/dscbkbiet/hacktoberfest/master/public/Icon.svg"} alt="Hacktoberfest Logo" />
                    <h1><i>Hacktoberfest Hackers</i></h1>
                    <p>Name</p> 
                    { /* Copy paste this below and replace "Name" with your own name */ }
                </Col>
            </Container>
        </>
    )
}

ReactDom.render(<App/>,document.getElementById("root"))