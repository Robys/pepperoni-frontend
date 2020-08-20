import React, {useState} from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import {Form, Button, Col, Row, Alert} from 'react-bootstrap'
import {CreateUser} from '../utils/utils'

export function Login(){
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [loading,setLoading] = useState(false)
    const [ready,setReady]= useState(false)

    const[onError,SetOnError] = useState(false)

    const SendInfo = async (email,password)=>{
        if(email!==undefined || password!==undefined){
            setLoading(true)
            const response = await  axios.get('https://pepperoni-backend.herokuapp.com/users')
            const filter = response.data.filter(user => user.email === email)
            console.log(filter)
            if(filter.password === password){
            setTimeout(()=>{
            setLoading(false)
            setReady(true)
           }, 3000);
        }

        if(filter!==undefined || filter[0].password !==password){
            SetOnError(true)
            setTimeout(()=>{
                SetOnError(false)
               }, 5000);

        }

        }
        
        else{
            SetOnError(true)
            setTimeout(()=>{
                SetOnError(false)
               }, 5000);
        }
    

    }

    // <Redirect to={`/main/${email}`} />

    return (
        <div>
                <Form className="access-form">
                <h2>Login</h2>

                <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" onChange={e => setEmail(e.target.value) }/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" onChange={e => setPassword(e.target.value) }/>
                </Form.Group>

                <Button onClick={e=>SendInfo(email,password)}>{loading? "Carregando...": "Entrar"}</Button>
                {ready?<Redirect to={`/main/${email}`} />:""}

                </Form>

            {onError=== true?
            <Alert variant="danger">Eita, acho que você errou/esqueceu alguma coisa</Alert>
            :""}

        </div>
      
    )
}

export function Register(){

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirm, setConfirm] = useState()
    const [name,setName] = useState()
    const [lastname,setLastname] = useState()

    const [loading,setLoading] = useState(false)
    const [ready,setReady] = useState(false)

    const[onError,SetOnError] = useState(false)

    const SendForm = () =>{
        setLoading(true)
        if(password===confirm){
            CreateUser(password,email,name,lastname)

            setTimeout(()=>{
             setLoading(false)
             setReady(true)
            }, 3000);
        }

        if(name===undefined || lastname===undefined || email===undefined){
            SetOnError(true)
            setTimeout(()=>{
                SetOnError(false)
               }, 5000);
        }
    }

    return (
        <div>
              
                <Form className="access-form">
                <h2>Registrar</h2>

                <Row style={{marginBottom:"10px"}}>
                <Col>
                <Form.Label>Primeiro nome</Form.Label>
            <Form.Control onChange={e=>setName(e.target.value)} />
                </Col>
                <Col>
                <Form.Label>Sobrenome</Form.Label>
            <Form.Control onChange={e=>setLastname(e.target.value)}  />
                </Col>
                </Row>

                <Form.Group controlId="formBasicEmail">
                <Form.Label>Seu email</Form.Label>
                <Form.Control type="email" onChange={e => setEmail(e.target.value) }/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                <Form.Label>Sua senha</Form.Label>
                <Form.Control type="password" onChange={e => setPassword(e.target.value) }/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                <Form.Label>Confirme a senha</Form.Label>
                <Form.Control type="password" onChange={e => setConfirm(e.target.value) }/>
                </Form.Group>
                <Button onClick={e=>SendForm()}>{loading? "Carregando...": "Entrar"}</Button>
                {ready?<Redirect to={`/main/${email}`} />:""}
                </Form>

                {onError=== true?
            <Alert variant="danger">Eita, acho que você errou/esqueceu alguma coisa</Alert>
            :""}

        </div>
    )
}