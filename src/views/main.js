import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {Navbar,Nav,InputGroup,Form, Button} from 'react-bootstrap'
import {EditRecipe} from '../components/editRecipes'
import {RecipeMiniCard} from '../components/recipeMiniCard'
import {ShowRecipes} from '../utils/utils'

import logo from '../assets/pepperoni.png'
import stringSimilarity from 'string-similarity'

export function Main (props){

    const [recipes, setRecipes] = useState()
    const [edit,setEditActive] = useState(false)
    const [user,setUser] = useState()
    const [loading, setLoading] = useState(true)

    const [query,setQuery] = useState();
    const [results,setResults] = useState();

    const Search = query =>{

        const allRecipes = ShowRecipes()
        allRecipes.then(res => {
            res.filter(recipes => {
                var similarity = stringSimilarity.compareTwoStrings(recipes.name,query)
                if(similarity>=.52){
                    setResults(recipes)
                }else{
                    console.log("ops...")
                }
            })
        })
       }


    useEffect(()=>{
        const allRecipes = () =>{
            const show = ShowRecipes()
            show.then(r => 
                {
                setRecipes(r) 
                setLoading(false)
            })
            
        }

        const findUser = async () =>{
            const response = await axios.get('https://pepperoni-backend.herokuapp.com/users')
            const filter = response.data.filter(user => user.email === props.match.params.email)
            setUser(filter[0])
        }

    allRecipes()
    findUser()

    },[])

    return(
    <div>
        <div>

        <Navbar className="top-nav">
            <Navbar.Brand style={{color:"white"}}> <img  src={logo} alt="logo" style={{width:"32px",height:"32px"}}/> Pepperoni</Navbar.Brand>
            <Nav>
            {user===undefined? 
             <Nav.Link href="/access" style={{color:"white"}}> Login </Nav.Link>:
             <Nav.Link href={`/profile/${user.id}`}
             key={user.id} style={{color:"white", margin:"10px"}}> {user.name}
             </Nav.Link> }
             <Nav.Link href="/" style={{color:"white", margin:"10px"}}>exit</Nav.Link>
            </Nav>

            <InputGroup className="mb-3 search-bar" size="sm">
            <Form.Control type="text" onChange={e=>setQuery(e.target.value)}/>
            <InputGroup.Append>
            <Button onClick={e=>Search(query)}>procurar</Button>
            </InputGroup.Append>
            </InputGroup>

        </Navbar>


        </div>
        


        <div className="main-area">
        {loading?"carregando...":
        recipes.length===0 || recipes.length===undefined?
        <div>
            <p>receitas não encontradas
            </p> <Button onClick={e=>setEditActive(!edit)}>
                {edit?"voltar": "adicionar"}</Button> 
        </div>:
        results!==undefined? <RecipeMiniCard recipe={results}/>:
        <div>
        {recipes.map(recipe =>
            <RecipeMiniCard recipe={recipe} key={recipe.id}/>)} 
        
        <p>você pode adicionar sua própria receita clicando aqui </p>
        <Button onClick={e=>setEditActive(!edit)}>
                {edit?"voltar": "adicionar"}</Button> 
        </div>}

        {edit===true?
        <EditRecipe user={user}/>
        :""}


        </div>
        
        
    </div>

    )
}