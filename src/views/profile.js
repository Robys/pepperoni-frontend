import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Navbar} from 'react-bootstrap'
import logo from '../assets/pepperoni.png'
import {UserMiniRecipeCard} from '../components/recipeMiniCard'

export function Profile(props){

    const [user, setUser] = useState()

    useEffect(()=>{
        async function GetUserbyId(){
            axios.get(`https://pepperoni-backend.herokuapp.com/users/${props.match.params.id}`)
            .then(res => setUser(res.data))
        }

        GetUserbyId()
    },[])
    return(
        <div>
           {user!==undefined?
           <div>
            <Navbar className="top-nav">
            <Navbar.Brand style={{color:"white"}}
            href={`/main/${user.email}`}> 
            <img  src={logo} alt="logo" style={{width:"32px",height:"32px"}}/> 
            Pepperoni</Navbar.Brand>
             </Navbar>

            <div className="profile">
            <h1>Perfil</h1>
            <hr/>
            <h2>{user.lastname} | {user.name}</h2>
           <h3>{user.email}</h3>
           <h3>_id: {user.id}</h3>
           <hr/>
            <h2>Suas Receitas</h2>
           {user.recipes!==null?
           user.recipes.map(res=><UserMiniRecipeCard recipe={res}/>)
            :"eita! você ainda não tem nenhuma receita..."}

            </div>
            
        </div>

           :""}
            
        </div>
    )
}