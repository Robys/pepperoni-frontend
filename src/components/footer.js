import React from 'react'
import {Nav} from 'react-bootstrap'

import fb from '../assets/icons/fb.png'
import insta from '../assets/icons/insta.png'
import lin from '../assets/icons/linked.png'
import tw from '../assets/icons/tw.png'
import yb from '../assets/icons/yb.png'

export function Footer(){
    const icons = [
        {label:"facebook", value: fb, link: "https://www.facebook.com/Roby.Oliveira.f"},
        {label:"instagram", value: insta, link: "https://www.instagram.com/92rob/?hl=pt-br"},
        {label:"linkedin", value: lin, link:"https://www.linkedin.com/in/robert-oliveira-04936963/"},
        {label:"twitch", value: tw, link: "https://www.twitch.tv/robhexagran92"},
        {label:"youtube", value: yb, link: "cutt.ly/floral_shirt"},
    ]

    return(
        <footer>
            <h3>Criado por: Robert Oliveira</h3>
            <Nav className="justify-content-center" >
            <div>
            {icons.map(i => 
            <img src={i.value} key={i.label} alt={i.label} href={i.link}/>
            
            )}
            </div>
        
            </Nav>

        </footer>
    )
}