import React from 'react'
import Home from './Home'
import Search from './Search'
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Navigation from './Navigation';


const App = () => {
  return (     
    <BrowserRouter>  
    <Navigation/> 
          <Switch>                
             <Route path='/Search' component={Search}/>  
             <Route path='/' component={Home}/>            
          </Switch>
    </BrowserRouter> 
    
  )
}

export default App
