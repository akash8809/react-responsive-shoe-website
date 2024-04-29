
import React from 'react'
import Navbar from './components/website_head'
import Home from './components/home'
import Footer  from './components/footer'
import Items from './components/items'
import About from './components/about'
import Order from './components/order'
import Contact from './components/contact_from'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default function App() {
  return (
    <div >
      <Router>
          <Navbar />
        <Switch>
          <Route path="/" exact component={Home}>
          
          </Route>
            <Route path="/menu" exact component={Items}>
            
          </Route>
          <Route path="/about" exact component={About}>
          
          </Route>
            <Route path="/order" exact component={Order} >
          
          </Route>
            <Route path="/contact" exact component={Contact} >
          
          </Route>
        </Switch>

         <Footer/>
      </Router>
       
    </div>
  )
}
