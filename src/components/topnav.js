import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import logo from '../assets/pepperoni.png'

export function TopNav (props){

    return(
        <Navbar className="top-nav">
            <Navbar.Brand style={{color:"white"}}
            href="/"> <img  src={logo} alt="logo" style={{width:"32px",height:"32px"}}/> Pepperoni</Navbar.Brand>
            <Nav>
             <Nav.Link href="/access" style={{color:"white"}}> Login </Nav.Link>
            </Nav>

        </Navbar>
    )
}