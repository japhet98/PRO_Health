import React, { Component } from 'react'
//import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Carousel from './Layout/carousel'
import Jumbrotum from './Layout/jumbrotum';
class HomePage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                
            
                <Carousel/>
                <Jumbrotum />
               </div> 
         );
    }
}
 
export default HomePage;