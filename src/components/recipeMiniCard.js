import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {Card,Button} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'

export function RecipeMiniCard(props){
    return(
        <Card className="recipe-card">
            <Card.Header>{props.recipe.name} | por: {props.recipe.user} </Card.Header>
            <Card.Footer>
                <Button href={`/recipe/${props.recipe.id}`} > quero fazer </Button>
            </Card.Footer>
        </Card>
    )
}

export function UserMiniRecipeCard(props){

    const [data,setData] = useState()

    useEffect(()=>{
        async function FindRecipe(){
            axios.get(`https://pepperoni-backend.herokuapp.com/recipes/${props.recipe}`)
            .then(res => setData(res.data))

        }

        FindRecipe()
    },[])


    const RemoveRecipe = async (id) =>{
        var response = await axios.get(`https://pepperoni-backend.herokuapp.com/users`)
        var finduser = response.data.filter(user => user.email===data.user)
        console.log(finduser[0])
        axios.put(`https://pepperoni-backend.herokuapp.com/users/${finduser[0].id}`,{
            name: finduser[0].name ,
            lastname: finduser[0].lastname,
            email: finduser[0].email,
            password: finduser[0].password,
            favorites: finduser[0].favorites,
            recipes: finduser[0].recipes.filter(recipe=> recipe._id!==id),
        })
        axios.delete(`https://pepperoni-backend.herokuapp.com/recipes/${id}`)
        window.location.reload(false)
    }


    return(
    <div>
        {data === null?"": 
        data!==undefined? <Card className="recipe-card">
            <Card.Header>{data.name} 
            <FontAwesomeIcon icon={faTrashAlt} onClick={e=>RemoveRecipe(data.id)}/> 
            </Card.Header>
            <Card.Footer>
            <Button href={`/recipe/${data.id}`} > quero fazer </Button> 
             </Card.Footer>
            </Card> : ""}

    </div>)
}