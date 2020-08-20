import React from 'react'
import {Tabs, Tab} from 'react-bootstrap'
import {Login, Register} from '../components/login'
import {TopNav} from '../components/topnav'
import {Footer} from '../components/footer'


export function Access (){
    return (
        <div>
            <TopNav/>

            <div className="access-area">
            
            
            <Tabs defaultActiveKey="login">
                <Tab eventKey="login" title="login">
                    <Login/>
                </Tab>

                <Tab eventKey="register" title="registrar">
                    <Register/>
                </Tab>

            </Tabs>
     
        </div>

        <Footer/>


        </div>
     
    )
}
