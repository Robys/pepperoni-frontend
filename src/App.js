import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './utils/style.css'
import {BrowserRouter, Route} from 'react-router-dom'
import {Home} from './views/home'
import {Access} from './views/access'
import {Main} from './views/main'
import {Recipe} from './views/recipe'
import {Profile} from  './views/profile'

function App() {
  return (
    <BrowserRouter>
    <Route exact path="/" component={Home} />
    <Route exact path="/access" component={Access} />
    <Route exact path="/main/:email" component={Main} />
    <Route exact path="/recipe/:id" component={Recipe} />
    <Route exact path="/profile/:id" component={Profile} />
    </BrowserRouter>
  );
}

export default App;
