import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';
import {Switch, Route, Redirect} from 'react-router-dom';

const App = ()=>{
    return (
        <>
        <Navbar />
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/services" component={Services}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Redirect to="/"></Redirect>
        </Switch> 
        <Footer />   
        </>
    );
};


export default App;