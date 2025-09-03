import React from 'react'
import {StylesProvider} from '@material-ui/core/styles'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Landing from './components/Landing'
import Pricing from './components/Pricing'

export default () => {
 return (<StylesProvider>
    <BrowserRouter>
        <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route exact path="/" component={Landing} />
            
        </Switch>
    </BrowserRouter>
 </StylesProvider>)   
}