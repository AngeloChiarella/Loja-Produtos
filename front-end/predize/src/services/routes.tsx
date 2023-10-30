import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Card } from '../components/card/card'


const Routes:React.FC = () => {
    return(
        <Switch>
            <Route path='/catalogo' component={Card} />
        </Switch>
    )
}

export default Routes;