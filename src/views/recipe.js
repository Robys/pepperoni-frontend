import React, {useState,useEffect} from 'react'
import {Accordion,Card, Button} from 'react-bootstrap'
import {CommentArea} from '../components/commentArea'
import {TopNav} from  '../components/topnav'
import {Rating} from '../components/rating'
import axios from 'axios'

export function Recipe (props){
    const [recipe,setRecipe] = useState()

    useEffect(()=>{
        const findRecipe = () =>{
            axios.get(`https://pepperoni-backend.herokuapp.com/recipes/${props.match.params.id}`)
            .then(res => setRecipe(res.data))
        }

        findRecipe()
    },[])

    return(<div>
        <TopNav/>

        {recipe!==undefined? 
        <div className="recipe">
            <ul className="recipe-title-list">
            <li><h1>{recipe.name}</h1></li>
            <li><Rating recipe={recipe}/></li> 
            </ul>
            
            <Accordion>
                <Card><Card.Header>
                    <Accordion.Toggle as={Button} className="accordion-toggle" variant="link" eventKey="0"/>
                    Ingredientes
                </Card.Header>

                <Accordion.Collapse eventKey="0">
                <Card.Body className="recipe-info">
                    <ul>
                    {recipe.components.map(component=> <li>{component}</li>)}
                    </ul>
                    </Card.Body>
                </Accordion.Collapse>

                <Card.Header>
                    <Accordion.Toggle as={Button} className="accordion-toggle"  variant="link" eventKey="1"/>
                    Modo de Preparo
                </Card.Header>

                <Accordion.Collapse eventKey="1">
                <Card.Body className="recipe-info">
                <ul>
                    {recipe.steps.map(step=> <li>{step}</li>)}
                </ul>
                </Card.Body>
                </Accordion.Collapse>

                <Card.Header>
                <Accordion.Toggle as={Button} className="accordion-toggle"  variant="link" eventKey="2"/>
                    Comentar
                </Card.Header>

                <Accordion.Collapse eventKey="2">
                <Card.Body className="recipe-info">
                    <CommentArea recipe={recipe}/>
                </Card.Body>
                </Accordion.Collapse>


                </Card>
            </Accordion>

            <h1>Comentários</h1>

            {recipe.comments.length!== 0?recipe.comments.map(comment=>
            <Card key={comment.text}>
                <Card.Header>por: {comment.name}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        {comment.text}
                    </Card.Text>
                </Card.Body>
            </Card>): "ainda não possui nenhum comentário :("}

        </div>: ""}



          </div>)
}