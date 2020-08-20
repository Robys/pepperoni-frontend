import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {AddCommentToRecipe} from '../utils/utils'

export function CommentArea (props){
    const [name,setName] = useState()
    const [text,setText] = useState()

    const SendComment = (id,text,name) => {
        AddCommentToRecipe(id,text,name)
        window.location.reload(false)
    }

    return(<div className="comment-area">
            <Form className="comment-form">
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Seu Nome</Form.Label>
                <Form.Control type="name" onChange={e => setName(e.target.value) }/>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                <Form.Label>Comente Aqui</Form.Label>
                <Form.Control as="textarea" onChange={e => setText(e.target.value) }/>
                </Form.Group>

                <Button onClick={e =>SendComment(props.recipe.id,text,name)}>Enviar</Button>

            </Form>
    </div>)
}