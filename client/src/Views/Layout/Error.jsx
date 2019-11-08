import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Error404 extends Component {
  render() {
    return (
        <div>
        <h1>Page not found</h1>
            <p style={{ textAlign: "center" }}>
                <Link to="/">Go to Home </Link>
            </p>
        </div>
    )
  }
}
