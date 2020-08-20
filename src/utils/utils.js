import React from 'react'
import axios from 'axios'


export async function CreateUser(password,email,name,lastname){

   await axios.post('https://pepperoni-backend.herokuapp.com/users',{
        name: name ,
        lastname: lastname,
        email: email,
        password: password,
        favorites: [],
        recipes: [],
    })     
    
}

export async function ShowRecipes(){
    const response = await axios.get('https://pepperoni-backend.herokuapp.com/recipes')
    return response.data
}

export function CreateRecipe(user,name,components,steps){
   
    axios.post('https://pepperoni-backend.herokuapp.com/recipes',{
        name:name,
        user: user.email,
        steps:steps,
        components:components,
        likes:[],
        dislikes:[],
        comments:[],

    })

    setTimeout(()=>{
        AddRecipeToUser(name,user)
       }, 1000);

}

export async function AddRecipeToUser(name,user){
    
    const response = await axios.get('https://pepperoni-backend.herokuapp.com/recipes')
    const recipe = response.data.filter(res => res.name === name)
    axios.put(`https://pepperoni-backend.herokuapp.com/users/${user.id}`,{
        name: user.name ,
        lastname: user.lastname,
        email: user.email,
        password: user.password,
        favorites: user.favorites,
        recipes: [...user.recipes,recipe[0].id],
    })
   
}

export async function AddCommentToRecipe(id,text,name){
    const comment = {name:name,text:text}
    const recipe = await axios.get(`https://pepperoni-backend.herokuapp.com/recipes/${id}`)
    axios.put(`https://pepperoni-backend.herokuapp.com/recipes/${id}`,{
        name:recipe.data.name,
        user:recipe.data.email,
        steps:recipe.data.steps,
        components:recipe.data.comments,
        likes:recipe.data.likes,
        dislikes:recipe.data.dislikes,
        comments:[...recipe.data.comments,comment],
    })
    
}

export async function ManageRating(id,rating){

    if(rating==="like"){
        const recipe = await axios.get(`https://pepperoni-backend.herokuapp.com/recipes/${id}`)
        axios.put(`https://pepperoni-backend.herokuapp.com/recipes/${id}`,{
            name:recipe.data.name,
            user:recipe.data.email,
            steps:recipe.data.steps,
            components:recipe.data.comments,
            likes:[...recipe.data.likes,rating],
            dislikes:recipe.data.dislikes,
            comments:recipe.data.comments,
        })

        if(rating==="dislike"){
            const recipe = await axios.get(`https://pepperoni-backend.herokuapp.com/recipes/${id}`)
            axios.put(`https://pepperoni-backend.herokuapp.com/recipes/${id}`,{
                name:recipe.data.name,
                user:recipe.data.email,
                steps:recipe.data.steps,
                components:recipe.data.comments,
                likes:recipe.data.likes,
                dislikes:[...recipe.data.dislikes,rating],
                comments:recipe.data.comments,
            })
        }

    }

    window.location.reload(false)
 
  
    
}