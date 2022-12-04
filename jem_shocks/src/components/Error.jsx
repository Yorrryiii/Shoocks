import React, { Component } from 'react';
import './Error.css';

export class Error extends Component{
    render(){
        return(
            <div>
                <img src="/images/NotFound.png" alt="ERROR 404 - Not Found" />
            </div>
        )
    }
}

export default Error;