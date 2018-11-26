import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Bio from './Bio'
import Projects from './Projects'
import NoMatch from './NoMatch'
import '../css/home.scss'
import '../css/bio.scss'
import '../css/projects.scss'
import '../css/nomatch.scss'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/bio' component={Bio}/>
            <Route path='/projects' component={Projects}/>
            <Route component={NoMatch} />
        </Switch>
    </main>
)

export default Main;
