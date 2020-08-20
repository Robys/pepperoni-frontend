import React, { useState } from 'react'
import {Form, InputGroup, Button} from 'react-bootstrap'
import {CreateRecipe} from '../utils/utils'

export function EditRecipe(props){

    const user = props.user

    const [name, setName] = useState()
    const [ingredientArray,setIngredientArray] = useState([])
    const [stepArray,setStepArray] = useState([])
    const [ingredient,setIngredient] = useState({})
    const [step,setStep] = useState({})

    const [components,setComponets] = useState([])
    const [steps,setSteps] = useState([])
    const [loading,setLoading] = useState(false)
    const [ready,setReady]= useState(false)
    
    

    const addOnIngredient = () =>{
        setIngredientArray([...ingredientArray,""])
    }

    const addOnSteps = () =>{
        setStepArray([...stepArray,""])
    }
    
    return(
        <div className="edit-recipe">

            <h2>Nome</h2>
            <div className="edit-elements">
            <Form.Control type="name" onChange={e=>setName(e.target.value)}/>
            </div>
            <hr/>

        <div className="edit-elements">

        {ingredientArray.map((index)=>{
            return(
            <div key={index}>

        <InputGroup className="mb-3">
        <Form.Control placeholder="adicione o ingrediente aqui..."
        type="text" onChange={e=>setIngredient(e.target.value)}/>
        <InputGroup.Append>
        <Button onClick={e=>setComponets([...components, ingredient])}>ok</Button>
        </InputGroup.Append>
        </InputGroup>
                
            </div>)
        })}

        </div>

            <Button onClick={e=>addOnIngredient()}>Ingredientes</Button>
            <hr/>

            <div className="edit-elements">

            {stepArray.map((index)=>{
                return(
                <div key={index}>
                    <Form.Control placeholder="escreva aqui como se faz..."
                    as="textarea" onChange={e=>setStep(e.target.value)}/>
                    <Button onClick={e=>setSteps([...steps, step])}>ok</Button>
                </div>)
            })}

            </div>
            
           
            <hr/>
            <Button onClick={e=>addOnSteps()}>Etapas de Preparo</Button>
            <hr/>
            

            <Button 
             onClick={e=>{
                 CreateRecipe(user,name,components,steps)
                 setLoading(true)
                 setTimeout(()=>{
                    setLoading(false)
                    setReady(true)
                   }, 2000);
             }
            }>{loading?"Carregando...": "Enviar"}</Button>
            

            {components!==undefined?
             components.map(comp => <p>{comp}</p>)
             :""}

            {steps!==undefined?
            steps.map(step=><p>{step}</p>)
            :""}

        {ready? window.location.reload(false): ""}
            
        </div>
    )
}