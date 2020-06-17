import { Route, BrowserRouter} from 'react-router-dom'
import React from 'react'

import Home from './components/Home'
import Form from './components/Form'


const Routes = () => {
    return (
    <BrowserRouter>
        <Route path='/' component={Home} exact/>
        <Route path='/register' component={Form} exact/>
    </BrowserRouter>
    );
}

export default Routes;