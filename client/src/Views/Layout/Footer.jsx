import React, { Component } from 'react'

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <footer style={{textAlign:"center"}}>
                <div>
                    <a href="/">Visit us</a>
                    <span>&copy; 2019 Patients R.M</span>
                </div>
                <div className="ml-auto">
                    <span>Powered by</span>
                    <a href="/">CE 3 Group 8</a>
                </div>
            </footer>
         );
    }
}
 
export default Footer;