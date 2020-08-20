import React, {useState} from 'react'
import {Badge}from 'react-bootstrap'
import {ManageRating} from '../utils/utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

export function Rating(props){
    const [hasliked,setLike] = useState(false)
    const [hasDisliked,setDislike] = useState(false)
    const recipe = props.recipe

    return (
        <ul className="recipe-title-list">
           <li><p> <Badge pill variant="success">{recipe.likes.length}</Badge> {hasliked? 
            <FontAwesomeIcon icon={faThumbsUp} style={{color:"black"}}/> 
            : <FontAwesomeIcon icon={faThumbsUp} style={{color:"white"}} onClick={()=>{
                setLike(true)
                ManageRating(recipe._id,"like")
            } }/>
                }
            </p>
        </li> 
            
         <li><p> <Badge pill variant="dark"> {recipe.dislikes.length} </Badge> {hasDisliked? 
            <FontAwesomeIcon icon={faThumbsDown} style={{color:"black"}}/> 
            : <FontAwesomeIcon icon={faThumbsDown} style={{color:"white"}} onClick={()=>{
                setDislike(true)
                ManageRating(recipe._id,"dislike")
            } }/>
                }
            </p>
            </li>

        </ul>
    )
}