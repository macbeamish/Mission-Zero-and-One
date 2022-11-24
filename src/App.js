import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Hero from './Hero';
import Main from './Main';
import Footer from './Footer';

const App = () => {
    return(  
        <>
           <Navbar /> 
           <Hero /> 
           <Main />
           <Footer />
        </>

    );
}
export default App;