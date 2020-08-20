import React from 'react'
import {TopNav} from '../components/topnav'
import {Card} from 'react-bootstrap'
import {Footer} from '../components/footer'

import pan2 from '../assets/imgs/pan-2.jfif'
import pan3 from '../assets/imgs/pan-3.jfif'
import vejetables from '../assets/imgs/vejetables.jfif'

export function Home (){

    return(
      <div>
          <TopNav/>
          <header className="header">
            <h1>Nunca passe fome com</h1>
            <h2>Pepperoni</h2>
          </header>
          <section className="text-section">
            <h2>Crie ou Explore novas idéias</h2>
            <div className="text-content">
            <Card className="home-cards">
            <Card.Img variant="top" src={pan2}/>
            <Card.Body>
            <Card.Title>Procure pratos novos</Card.Title>
            <Card.Text>
             Cansado de comer sempre a mesma coisa, ou pedir
             comida por delivery toda hora? Seus problemas acabaram!
             com Pepperoni você encontra sempre uma comidinha simples de fazer.
            </Card.Text>
          </Card.Body>
            </Card>

            <Card className="home-cards">
            <Card.Img variant="top" src={vejetables}/>
            <Card.Body>
            <Card.Title>Tem de tudo</Card.Title>
            <Card.Text>
             Coloque quantos ingredientes quiser, explique da maneira que quiser.
             Aqui você é livre pra montar os mais diveros (deliciosos ou não) pratos.
            </Card.Text>
          </Card.Body>
            </Card>

            <Card className="home-cards">
            <Card.Img variant="top" src={pan3}/>
            <Card.Body>
            <Card.Title>Mostre que você sabe</Card.Title>
            <Card.Text>
             Com Pepperoni você pode criar usas próprias receitas, ou compartilha
             aquela especialidade da vovó com todo mundo...
            </Card.Text>
          </Card.Body>
            </Card>

            </div>

          </section>

          <Footer/>
          
      </div>
    )
}